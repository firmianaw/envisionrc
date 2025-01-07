import Link from "next/link";

export default function EntryRequirements() {
    return (
      <div>
        <p className="text-4xl font-extrabold">
          Entry Requirements
        </p>
        <p className="text-2xl font-bold pt-4 pb-2">
          Components
        </p>
        <p className="pb-2">
          All should contain the following sections:
        </p>
        <ul className="list-decimal pl-8 pb-2">
          <li>
            <b>Title page:</b> A title page with the proposal title and name of author(s).
          </li>
          <li>
            <b>Abstract:</b> An abstract summarizing the problem and your solution which must be {`<`}150 words.
          </li>
          <li>
            <b>Introduction:</b> Summary of the significance of the research problem.
          </li>
          <li>
            <b>Literature review:</b> Descriptions of current progress and research along with challenges and insufficiencies.
          </li>
          <li>
            <b>Methods:</b> A detailed explanation of the research you or your team intends to conduct, including how it will lead to progress in that scientific area and anticipation of any obstacles that may prevent the progress of this research.
          </li>
          <li>
            <b>References:</b> APA formatted references.
          </li>
        </ul>
        <p className="pb-2">
          Further details on these sections can be found in <Link href='/compete/judging-criteria' target='_blank' className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Judging Criteria</Link>.
        </p>
        <p className="text-2xl font-bold pt-4 pb-2">
          Format
        </p>
        <p className="pb-2">
          All entries should be submitted as pdf via the competition portal with the following three format requirements:
        </p>
        <ul className="list-disc pl-8 pb-2">
          <li>
            8 1/2&quot; x 11&quot; white paper, with 1&quot; margins.
          </li>
          <li>
            12 point Times New Roman font.
          </li>
          <li>
            Title page and abstract page are the first two pages.
          </li>
          <li>
            Length of five to fifteen pages including the title and abstract page but discluding space occupied by diagrams and references.
          </li>
          <li>
            Labeled section titles with each of the 6 components listed above.
          </li>
        </ul>
        <p>
          Please submit using plain text without any special formatting.
        </p>
      </div>
    )
  }
  