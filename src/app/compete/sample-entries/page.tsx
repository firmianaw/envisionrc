'use client';

import {Tabs, Tab} from "@nextui-org/tabs";

import CustomCarousel from "@/components/CustomCarousel/CustomCarousel";

const sampleEntriesLengths = [10, 11, 11, 10, 6];

export default function SampleEntries() {
    const entries = Array.from({ length: 5 }, (_, i) => i + 1);

    return (
      <div>
        <p className="text-4xl font-extrabold pb-4">
          Sample Entries
        </p>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            {entries.map((num) => (
              <Tab key={num} title={`Sample ${num}`}>
                  <div className='border-1 border-neutral-100 rounded-xl'>
                    <CustomCarousel
                      key={num}
                      src={`/sample-entries-${num}/sample-entries-${num}`} 
                      len={sampleEntriesLengths[num-1]} 
                      arrowColor='purple' 
                    />
                  </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    );
  }
  