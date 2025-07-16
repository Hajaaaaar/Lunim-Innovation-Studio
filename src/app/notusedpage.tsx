

// import { builder } from '@builder.io/sdk';
// import { RenderBuilderContent } from '@/components/builder';
// import '@/builder-registry';

// // Initialize the Builder SDK with API key
// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// export default async function HomePage() {
//   const content = await builder
//     .get('page', {
//       userAttributes: {
//         // Fetch content for the homepage URL path
//         urlPath: '/',
//       },
//     })
//     .toPromise();

//   return (
//     <>
//       {/* Render the Builder page content */}
//       <RenderBuilderContent content={content} />
//     </>
//   );
// }