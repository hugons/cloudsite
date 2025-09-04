import { getDocumentBySlug } from 'outstatic/server';

export default async function AboutPage() {
  const about = await getDocumentBySlug('pages', 'about', ['title', 'content']);

  if (!about) {
    return <div>Content not found</div>;
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-4xl">
        <h1 className="text-4xl font-bold">{about.title}</h1>
        <div className="text-left leading-relaxed space-y-4 prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: about.content }} />
        </div>
      </main>
    </div>
  );
}
