import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/dee61545-3c63-4b21-86d1-11186aa66be3-1w7n1.jpeg",
  "https://utfs.io/f/f5434a4b-f9cd-4397-85fd-d4aeef38b415-21zsf.jpeg",
  "https://utfs.io/f/1915be23-6e65-4931-9834-33e50a5f7a89-1l0hy8.jpeg",
  "https://utfs.io/f/a3547742-f489-4957-bd8a-f07a8a6e631a-1l0hy7.jpeg",
  "https://utfs.io/f/911c98c2-6801-4e9e-89b4-398f11cf1c2b-1l0hy6.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt="image" className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
