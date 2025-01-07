import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div>
            <p className="text-4xl font-extrabold">
                Privacy Policy
            </p>
            <p className="text-2xl font-bold pt-4 pb-2">
                ENVISION Research Competition Privacy Statement
            </p>
            <p className="pb-2">
                ENVISION Research Competition reserves the right to use a student’s name, photograph, school name, city, quote, and photograph on ENVISION’s website, press releases, or news articles for promotional purposes. No students’ research paper and abstract will be released without their permission.
            </p>
            <p className="text-2xl font-bold pt-4 pb-2">
                Information Collection and Use
            </p>
            <p className="pb-2">
                Many services on this website, including but not limited to creating a competition portal, merchandise purchase, and signing up for conference and workshop events, ask for information about yourself, including but not limited to contact and education information. Questions may include your full name, age, address, and other personal information. This information is collected for contact and identification purposes, such as notifying you of the status of your entry. We will never sell contact or demographic information inputted into our website.
            </p>
            <p className="text-2xl font-bold pt-4 pb-2">
                Students&apos; and Minors&apos; Privacy
            </p>
            <p className="pb-2">
            The Children&apos;s Online Privacy Protection Act of 1998 (COPPA) protects children&apos;s personal information under the age of 13. This includes full name, home address, email address, telephone number, or any other identifying information. COPPA also restricts the collection of demographics such as hobbies, interests, and information collected through cookies or other types of tracking mechanisms. By signing up for the competition portal, mailing list, or other features that require the input of demographic or other identifying information, we assume that you are not under the age of 13.
            </p>
            <p className="text-2xl font-bold pt-4 pb-2">
                Contact
            </p>
            <p>
            If you have concerns about privacy, would like to request to be removed from ENVISION mailing lists, or have other questions or complaints, please reach ENVISION at 
            <span className="pl-1">
                <Link 
                href="mailto:envision@talaria.org"
                className='underline underline-offset-4 decoration-solid hover:decoration-wavy'
                >
                    envision@talaria.org.
                </Link>
            </span>
            </p>
        </div>
    );
}