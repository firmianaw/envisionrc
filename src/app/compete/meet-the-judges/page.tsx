'use client';

import { judges } from "@/data/judges"

export default function MeetTheJudges() {
    return (
      <div>
        <p className="text-4xl font-extrabold pb-4">
          Meet the Judges
        </p>
        <div>
          <div className="grid gap-4 md:grid-cols-3 grid-cols-2">
            {judges.map((judge, index) => (
              <div key={index} className="pb-2">
                <p className="font-bold">{`${judge.title}` + (judge.title == "" ? "": " ") + judge.name}</p>
                <p>{judge.institution}</p>
                <p className="italic">{judge.department}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  