import React from 'react';
import { Billboard as BillboardType } from '@/types';

interface BillboardProps {
    data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div className="rounded-xl relative aspect-square md:aspect-[2.41/1] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover"
                    style={{
                        backgroundImage: `url(${data?.imageUrl})`,
                        filter: 'blur(2px)' // Daha az bulanıklık için değeri ile oynanabilir.
                    }}
                />
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 relative">
                    <div
                        className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs relative"
                        style={{ zIndex: 1, color: '#000000' }}
                    >
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billboard;