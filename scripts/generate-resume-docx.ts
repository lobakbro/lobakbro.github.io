import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  TabStopPosition,
  TabStopType,
  convertInchesToTwip,
} from 'docx';
import { resume } from '../src/data/resume.ts';
import { writeFileSync, mkdirSync } from 'fs';

const FONT = 'Calibri';
const BODY_SIZE = 22; // 11pt in half-points
const SMALL_SIZE = 20; // 10pt
const NAME_SIZE = 36; // 18pt
const HEADING_SIZE = 24; // 12pt

function sectionHeading(text: string): Paragraph {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 120 },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        size: HEADING_SIZE,
        font: FONT,
      }),
    ],
  });
}

function bullet(text: string): Paragraph {
  return new Paragraph({
    spacing: { after: 40 },
    indent: { left: convertInchesToTwip(0.25) },
    children: [
      new TextRun({
        text: `\u2022  ${text}`,
        size: SMALL_SIZE,
        font: FONT,
      }),
    ],
  });
}

function spacer(twips: number = 80): Paragraph {
  return new Paragraph({ spacing: { after: twips }, children: [] });
}

// --- Header ---
const headerParagraphs: Paragraph[] = [
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 40 },
    children: [
      new TextRun({
        text: resume.name,
        bold: true,
        size: NAME_SIZE,
        font: FONT,
      }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 40 },
    children: [
      new TextRun({
        text: `${resume.title} | ${resume.location}`,
        size: BODY_SIZE,
        font: FONT,
      }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 120 },
    children: [
      new TextRun({
        text: `${resume.contact.email} | ${resume.contact.site} | ${resume.contact.linkedin}`,
        size: SMALL_SIZE,
        font: FONT,
      }),
    ],
  }),
];

// --- Summary ---
const summaryParagraphs: Paragraph[] = resume.summary
  ? [
      sectionHeading('Summary'),
      new Paragraph({
        spacing: { after: 80 },
        children: [
          new TextRun({
            text: resume.summary,
            size: BODY_SIZE,
            font: FONT,
          }),
        ],
      }),
    ]
  : [];

// --- Experience ---
const experienceParagraphs: Paragraph[] = [sectionHeading('Experience')];

for (const job of resume.experience) {
  experienceParagraphs.push(
    new Paragraph({
      spacing: { after: 20 },
      tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
      children: [
        new TextRun({
          text: job.role,
          bold: true,
          size: BODY_SIZE,
          font: FONT,
        }),
        new TextRun({ text: '\t', font: FONT }),
        new TextRun({
          text: job.period,
          size: SMALL_SIZE,
          font: FONT,
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: job.company,
          italics: true,
          size: SMALL_SIZE,
          font: FONT,
        }),
      ],
    }),
    ...job.highlights.map((h) => bullet(h)),
    spacer(),
  );
}

// --- Projects ---
const projectParagraphs: Paragraph[] = [sectionHeading('Projects')];

for (const project of resume.projects) {
  projectParagraphs.push(
    new Paragraph({
      spacing: { after: 20 },
      children: [
        new TextRun({
          text: project.name,
          bold: true,
          size: BODY_SIZE,
          font: FONT,
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 40 },
      children: [
        new TextRun({
          text: project.description,
          size: SMALL_SIZE,
          font: FONT,
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 40 },
      children: [
        new TextRun({
          text: `Tech: ${project.tech.join(', ')}`,
          italics: true,
          size: SMALL_SIZE,
          font: FONT,
        }),
      ],
    }),
    ...project.highlights.map((h) => bullet(h)),
    spacer(),
  );
}

// --- Education ---
const educationParagraphs: Paragraph[] = [sectionHeading('Education')];

for (const edu of resume.education) {
  educationParagraphs.push(
    new Paragraph({
      spacing: { after: 20 },
      tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
      children: [
        new TextRun({
          text: edu.degree,
          bold: true,
          size: BODY_SIZE,
          font: FONT,
        }),
        new TextRun({ text: '\t', font: FONT }),
        new TextRun({
          text: edu.period,
          size: SMALL_SIZE,
          font: FONT,
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: edu.institution,
          italics: true,
          size: SMALL_SIZE,
          font: FONT,
        }),
      ],
    }),
    ...edu.details.map((d) => bullet(d)),
    spacer(),
  );
}

// --- Skills ---
const skillsParagraphs: Paragraph[] = [sectionHeading('Skills')];

for (const [category, items] of Object.entries(resume.skills)) {
  skillsParagraphs.push(
    new Paragraph({
      spacing: { after: 40 },
      children: [
        new TextRun({
          text: `${category}: `,
          bold: true,
          size: SMALL_SIZE,
          font: FONT,
        }),
        new TextRun({
          text: (items as string[]).join(', '),
          size: SMALL_SIZE,
          font: FONT,
        }),
      ],
    }),
  );
}

// --- Assemble & Write ---
const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(0.6),
            bottom: convertInchesToTwip(0.6),
            left: convertInchesToTwip(0.7),
            right: convertInchesToTwip(0.7),
          },
        },
      },
      children: [
        ...headerParagraphs,
        ...summaryParagraphs,
        ...projectParagraphs,
        ...experienceParagraphs,
        ...educationParagraphs,
        ...skillsParagraphs,
      ],
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
mkdirSync('dist', { recursive: true });
writeFileSync('dist/Kevin_M_Ong_Resume.docx', buffer);
console.log('Generated dist/Kevin_M_Ong_Resume.docx');
