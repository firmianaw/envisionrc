'use client';

import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

export default function CompetitionFAQs() {
  return (
    <div>
      <p className="text-4xl font-extrabold">
        Competition FAQs
      </p>
      <p className="text-2xl font-bold pt-4 pb-2">
        Competitor Eligibility
      </p>
      <Accordion selectionMode="multiple">
        <AccordionItem key="1" aria-label="Accordion 1" title="Who is eligible to participate?">
          All team members must identify as female or genderqueer and be in high school.
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="How many people can I work with? Can I work alone?">
          You may work with yourself or in a group of up to 4 people. You do not have to attend the same high school, be in the same grade, or live in the same country.
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="How many entries can I send in?">
          You may send in an unlimited number of entries. They do not have to be with the same teams or group members every time. However, we recommend that you focus on a single entry instead of trying to submit as many as possible.
        </AccordionItem>
        <AccordionItem key="4" aria-label="Accordion 4" title="Can I reuse an entry from last year?">
          You may reuse entries that did not win category or overall recognition. You may re-enter entries which received honorable mentions.
        </AccordionItem>
        <AccordionItem key="5" aria-label="Accordion 5" title="I won category or overall recognition previously. May I re-enter?">
          Yes, but you must enter with a different project.
        </AccordionItem>
        <AccordionItem key="6" aria-label="Accordion 6" title="I am a rising freshman in high school/college. Can I enter?">
          Yes.
        </AccordionItem>
      </Accordion>

      <p className="text-2xl font-bold pt-4 pb-2">
        Entry Ideation and Requirements
      </p>
      <Accordion selectionMode="multiple">
        <AccordionItem key="1" aria-label="Accordion 1" className="w-full" title="What are the entry requirements? Where can I view a sample entry?">
        Visit <Link href='/compete/entry-requirements' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Entry Requirements</Link>. You can view sample entries in <Link href='/compete/sample-entries' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Sample Entries</Link> or check out the <Link href='/winners' target='_blank' className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Winners</Link> section.
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Can you hold a workshop for...">
        You may request a workshop <Link href='https://forms.gle/FJ3Tp8MuhRNco56h6' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>here</Link>.
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="What are some resources that can teach me more about proposal writing and grant application?">
        There are many resources available with a simple Google search, but some of our favorites include this basic <Link href='https://libguides.usc.edu/writingguide/researchproposal' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>guide to proposal writing</Link> by the University of South Carolina and these <Link href='https://undergradresearch.northwestern.edu/advising/sample-grant-proposals/' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>annotated undergrad proposals</Link> from Northwestern. Our <Link href='/compete/sample-entries' target="_blank" className='underline underline-offset-4 decoration-solid hover:decoration-wavy'>Sample Entries</Link> are also helpful places to start.
        </AccordionItem>
      </Accordion>
    </div>
  )
}
