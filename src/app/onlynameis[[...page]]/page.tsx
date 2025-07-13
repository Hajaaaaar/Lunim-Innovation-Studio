

// import { builder } from '@builder.io/sdk';
// import { RenderBuilderContent } from '@/components/builder';
// import { notFound } from 'next/navigation';


// import '@/builder-registry';

// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// interface PageProps {
//   params: {
//     page: string[];
//   };
// }


// export async function generateStaticParams() {
//   const pages = await builder.getAll('page', {
//     fields: 'data.url',
//     options: { noTargeting: true },
//   });

//   return pages.map(page => ({
//     page: page.data?.url.split('/').filter(Boolean),
//   }));
// }

// export default async function Page(props: PageProps) {
//   const urlPath = '/' + (props.params.page?.join('/') || '');

//   const content = await builder
//     .get('page', {
//       userAttributes: {
//         urlPath: urlPath,
//       },
//     })
//     .toPromise();

//   // If there's no content, show a 404 page
//   if (!content) {
//     return notFound();
//   }

//   return (
//     <>
//       {/* Render the Builder page */}
//       <RenderBuilderContent content={content} />
//     </>
//   );
// }