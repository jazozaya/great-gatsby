let doc = null;

if (typeof window !== 'undefined') {
  const jsPDF = require('jspdf');
  doc = new jsPDF();
  module.exports.doc = doc;
}

let spaceIndex = 4;

const TITLE_SIZE = 20;
const HEADER_SIZE = 16;
const TEXT_SIZE = 10;

const maxWidth = 210;
const margin = 25.4;
const spacing = 7;
const delta = 0.8;

const parrLength = maxWidth - margin * 2;
const bulletLength = maxWidth - margin * 2 - 5;

function newPage() {
  // When starting a new page.
  doc.addPage();
  spaceIndex = 4;
}

function addLine(text) {
  doc.setFontSize(TEXT_SIZE).text(text, margin, spacing * spaceIndex);
  spaceIndex = spaceIndex + delta;
}

function addHeader(header) {
  spaceIndex = spaceIndex + delta;
  doc.setFontSize(HEADER_SIZE).text(header, margin, spacing * spaceIndex);
  spaceIndex = spaceIndex + 1;
}

function addParragraphs(parragraphs) {
  doc.setFontSize(TEXT_SIZE);
  parragraphs.forEach(parragraph => {
    let lines = doc.splitTextToSize(parragraph, parrLength); // Returns an array of each line.

    doc.text(lines, margin, spacing * spaceIndex, { align: 'justify', maxWidth: parrLength });
    spaceIndex = spaceIndex + delta * lines.length;
  });
}

function addTitle(title) {
  spaceIndex = spaceIndex + delta;
  doc.setFontSize(TITLE_SIZE).text(title, maxWidth / 2.0, spacing * spaceIndex, 'center');
  spaceIndex = spaceIndex + 1;
}

function addBullets(bullets) {
  doc.setFontSize(TEXT_SIZE);
  bullets.forEach(bullet => {
    let lines = doc.splitTextToSize(bullet, bulletLength);

    doc.text(`• ${bullet}`, margin + 5, spacing * spaceIndex, {
      align: 'justify',
      maxWidth: bulletLength
    });
    spaceIndex = spaceIndex + delta * lines.length;
  });
}

function addSignature(line) {
  spaceIndex = spaceIndex + delta;
  doc.setFontStyle('bold');
  doc.setFontSize(TEXT_SIZE).text(line, maxWidth / 2.0, spacing * spaceIndex, 'center');
}

module.exports.newPage = newPage;
module.exports.addLine = addLine;
module.exports.addHeader = addHeader;
module.exports.addParragraphs = addParragraphs;
module.exports.addTitle = addTitle;
module.exports.addBullets = addBullets;
module.exports.addSignature = addSignature;
