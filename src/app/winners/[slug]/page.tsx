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

                    {winner.firstPlace.src !== "" && 
                        <div className='flex items-start pb-4 space-x-4'>
                            <p>
                            {`Abstract: ${winner.firstPlace.abstract}`}
                            </p>

                            <div className='flex-shrink-0'>
                                <WinnersImage src={winner.firstPlace.src} />
                            </div>
                        </div> 
                    }

                    {
                        winner.firstPlace.src === "" &&
                        <div className='pb-4'>
                            <p>
                            {`Abstract: ${winner.firstPlace.abstract}`}
                            </p>
                        </div>
                    }

                    <p className="text-2xl font-bold pt-4 pb-2">
                        Second Place
                    </p>
                    <p className="text-lg font-bold pb-2">
                        {`${winner.secondPlace.name}: "${winner.secondPlace.title}"`}
                    </p>

                    {winner.secondPlace.src !== "" && 
                        <div className='flex items-start pb-4 space-x-4'>
                            <div className='flex-shrink-0'>
                                <WinnersImage src={winner.secondPlace.src} />
                            </div>
                            
                            <p>
                            {`Abstract: ${winner.secondPlace.abstract}`}
                            </p>
                        </div> 
                    }

                    {
                        winner.secondPlace.src === "" &&
                        <div className='pb-4'>
                            <p>
                            {`Abstract: ${winner.secondPlace.abstract}`}
                            </p>
                        </div>
                    }

                    <p className="text-2xl font-bold pt-4 pb-2">
                        Third Place
                    </p>
                    <p className="text-lg font-bold pb-2">
                        {`${winner.thirdPlace.name}: "${winner.thirdPlace.title}"`}
                    </p>
                    
                    {winner.thirdPlace.src !== "" && 
                        <div className='flex items-start pb-4 space-x-4'>
                            <p>
                            {`Abstract: ${winner.thirdPlace.abstract}`}
                            </p>

                            <div className='flex-shrink-0'>
                                <WinnersImage src={winner.thirdPlace.src} />
                            </div>
                        </div> 
                    }

                    {
                        winner.thirdPlace.src === "" &&
                        <div className='pb-4'>
                            <p>
                            {`Abstract: ${winner.thirdPlace.abstract}`}
                            </p>
                        </div>
                    }
                </div>
            ) : (
                <p>No data found for this url.</p>
            )}
        </div>
    );
}