// Get all documents and render them

async function getDocuments() {
  const documents = await prisma.documents.findMany();

  return documents;
}

export default async function Page() {
  const documents = await getDocuments();
  return (
    <div>
      <h1>Documents</h1>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>{doc.title}</li>
        ))}
      </ul>
    </div>
  );
}
