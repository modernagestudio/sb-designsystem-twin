import tw from 'twin.macro';
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: <GlobeAltIcon tw='h-6 w-6' aria-hidden='true' />,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: <ScaleIcon tw='h-6 w-6' aria-hidden='true' />,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: <LightningBoltIcon tw='h-6 w-6' aria-hidden='true' />,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: <AnnotationIcon tw='h-6 w-6' aria-hidden='true' />,
  },
];

export const Centred2x2 = () => {
  return (
    <div tw='bg-white py-12'>
      <div tw='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div tw='lg:text-center'>
          <h2 tw='text-base font-semibold uppercase tracking-wide text-indigo-600'>
            Transactions
          </h2>
          <p tw='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
            A better way to send money
          </p>
          <p tw='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div tw='mt-10'>
          <dl tw='space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0'>
            {features.map((feature) => {
              return (
                <div key={feature.name} tw='relative'>
                  <dt>
                    <div tw='absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white'>
                      <>{feature.icon}</>
                    </div>
                    <p tw='ml-16 text-lg font-medium leading-6 text-gray-900'>
                      {feature.name}
                    </p>
                  </dt>
                  <dd tw='mt-2 ml-16 text-base text-gray-500'>
                    {feature.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};
