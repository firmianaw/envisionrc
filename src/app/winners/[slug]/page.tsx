import { notFound } from 'next/navigation';
import { winners } from '@/data/winners';
import WinnersImage from '@/components/WinnersImage/WinnersImage';
  
type Props = {
    params: Promise<{
      slug: string;
    }>;
};

export default async function Page(props: Props) {
    const params = await props.params;
    const { slug } = params;

    const winner = winners[slug as keyof typeof winners];

    if (!winner) {
        notFound();
    }

    return (
        <div>
            <p className="text-4xl font-extrabold pb-4 capitalize">{slug.split('-').map((part) => part).join(' ')}</p>
        
            {winner ? (
                <div>
                    <p className="text-2xl font-bold pb-2">
                        First Place
                    </p>
                    <p className="text-lg font-bold pb-2">
                        {`${winner.firstPlace.name}: "${winner.firstPlace.title}"`}
                    </p>
                    <p>
                    {`Abstract: ${winner.firstPlace.abstract}`}
                    </p>

                    {winner.firstPlace.src !== "" && 
                    <div className="py-8 justify-center flex">
                        <WinnersImage src={winner.firstPlace.src} />
                    </div>
                    }

                    <p className="text-2xl font-bold pt-4 pb-2">
                        Second Place
                    </p>
                    <p className="text-lg font-bold pb-2">
                        {`${winner.secondPlace.name}: "${winner.secondPlace.title}"`}
                    </p>
                    <p>
                        {`Abstract: ${winner.secondPlace.abstract}`}
                    </p>

                    {winner.secondPlace.src !== "" && 
                        <div className="py-8 justify-center flex">
                            <WinnersImage src={winner.secondPlace.src} />
                        </div>
                    }

                    <p className="text-2xl font-bold pt-4 pb-2">
                        Third Place
                    </p>
                    <p className="text-lg font-bold pb-2">
                        {`${winner.thirdPlace.name}: "${winner.thirdPlace.title}"`}
                    </p>
                    <p>
                        {`Abstract: ${winner.thirdPlace.abstract}`}
                    </p>
                    
                    {winner.thirdPlace.src !== "" && 
                        <div className="pt-8 flex justify-center">
                            <WinnersImage src={winner.thirdPlace.src} />
                        </div>
                    }
                </div>
            ) : (
                <p>No data found for this url.</p>
            )}
        </div>
    );
}