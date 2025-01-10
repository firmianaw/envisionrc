import Link from "next/link";

export default function HowToCompete() {
    return (
      <div>
        <p className="text-4xl font-extrabold">
          How to Compete
        </p>
        <p className="text-2xl font-bold pt-4 pb-2">
          Step 1: Find a Team or Compete Individually
        </p>
        <p className="pb-2">
          Students may compete in teams of up to 4 individuals or by themselves. All team members must be in high school for at least part of the year of the competition. For example, in the 2020 competition year, high school freshmen in the 2020-2021 school year are eligible to compete despite being an eighth grade student at the start of 2020. Similarly, college freshmen in the 2020-2021 school year were also eligible to compete despite being in college by the end of the competition in early 2021. If you are unsure whether you or your friend qualify to compete due to a different school system or have other inquiries, please contact <Link href='mailto:envision@talaria.org' className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>envision@talaria.org</Link>.
        </p>
        <p className="text-2xl font-bold pt-4 pb-2">
          Step 2: Brainstorming and Ideation  
        </p>
        <p className="pb-2">
          After you have registered and started an entry, it is time to identify the subject of your proposal. There is no correct way to brainstorm for your proposal. If you are unsure how to start, common brainstorming routes include:
        </p>
        <ul className="list-disc pl-8 pb-2">
          <li>
            Consulting local and national news websites, particularly those focused on science, such as <Link href='https://www.sciencenews.org/' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Science News</Link> and <Link href='https://www.sciencedaily.com/' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Science Daily</Link>.
          </li>
          <li>
            Searching subject areas or topics in Google Scholar to review recent published research focuses.
          </li>
          <li>
            Visiting open access journals in a subject area of your interest (see the Directory of <Link href='http://doaj.org/' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Open Access Journals</Link>) or searching journal databases and archives such as <Link href='https://pubmed.ncbi.nlm.nih.gov/' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Pubmed</Link> and <Link href='https://arxiv.org/' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>ArXiv</Link>.
          </li>
          <li>
            Doing further research on a topic you enjoyed from a STEM class you took.
          </li>
        </ul>
        <p className="pb-2">
          Additionally, interesting topics are provided by ENVISION&apos;s writing team in ENVISION&apos;s blog articles.
        </p>
        <p className="pb-2">
          Once you have narrowed your ideas down a certain topic, such as such as stem cell transplants or using machine learning for speech recognition, you can consult review papers or continue reading literature until you discover a challenge, an under-investigated area, suggestions for a new application of the topic, or another appropriate reason to conduct further research in that area. As you do so, be sure to also take note of methods or approaches used in published research to help you design your experiment.
        </p>
        <p className="pb-2">
          At this point, you may select your entry category in the competition portal. If you are unsure what to select, you may consult the descriptions in <Link href='/compete/entry-categories' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Entry Categories</Link>.
        </p>
        <p className="text-2xl font-bold pt-4 pb-2">
          Step 3: Outlining Your Proposal
        </p>
        <p className="pb-2">
          When outlining your research proposal, carefully adhere to the requirements listed in <Link href='/compete/entry-requirements' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Entry Requirements</Link>.
        </p>
        <p className="pb-2">
          The requirements for a good proposal are simple: 1) a purpose that is either very impactful (e.g. a life-threatening health issue, a fundamental source of global warming) or widespread (i.e. affecting a large area or number of people), and 2) a clear explanation of a feasible research procedure that could investigate your topic or problem. Be sure to emphasize these points in the section by section outline of your proposal.
        </p>
        <p className="pb-2">
          During this step, you may also begin to put together your references. Keep the papers, websites, and other texts you used in a neatly organized document to streamline the writing process later.
        </p>
        <p className="text-2xl font-bold pt-4 pb-2">
          Step 4: Writing, Editing, and Submission
        </p>
        <p className="pb-2">
          If you are working in a group, you may delegate the writing to one person for consistency or have each person write one section. While proposals do not have to be in third person, it is necessary to maintain a mature, scientific voice, comparable to the published papers and reviews you may have read throughout the course of the project.
        </p>
        <p className="pb-2">
          Carefully line-editing the proposal is important as a single typo may shatter the professionalism of the entry. Be sure to read thoroughly for grammatical errors. You may share your writing with non-team members, friends, and parents to proofread. Additionally, be sure to double-check that the format of your document fulfills the requirements listed in <Link href='/compete/entry-requirements' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Entry Requirements</Link>.
        </p>
        <p className="pb-2">
          Once you are ready to submit, download your entry as a pdf. Upload and submit via the competition portal. We will not accept submissions via email, Instagram, or any other form of communication. If you are working in a team, please have only one person submit the entry via the portal. Once you have confirmed your submission, the status of your entry should change to “Submitted.” You should also receive a confirmation email. If this does not happen within 24 hours, please contact <Link href='mailto:envision@talaria.org' className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>envision@talaria.org</Link>.
        </p>
        <p className="italic">
          Need further help on proposal writing? Follow <Link href='https://www.instagram.com/envision.rc/' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>@envision.rc</Link> and <Link href='https://forms.gle/hihMCRPZfLsJcNfY6' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>join our mailing list</Link> to hear about the latest ENVISION workshops and conferences for proposal writing. Visit <Link href='https://forms.gle/mVHVq5s2jZ1tGK7f8' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>this form</Link> or email <Link href='mailto:envision@talaria.org' className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>envision@talaria.org</Link> to request workshops on specific topics.
        </p>
      </div>
    )
  }
  