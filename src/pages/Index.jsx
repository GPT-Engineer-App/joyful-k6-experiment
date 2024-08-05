import { Paw } from "lucide-react";

const Index = () => {
  const popularBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "French Bulldog",
    "Bulldog",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Paw className="mr-2" /> All About Dogs
        </h1>
        <img
          src="/placeholder.svg"
          alt="A cute dog"
          className="mx-auto object-cover w-full h-64 rounded-lg shadow-md mb-6"
        />
        <p className="text-lg mb-6">
          Dogs are known as man's best friend, and for good reason. These loyal companions
          have been by our side for thousands of years, offering unconditional love,
          protection, and companionship. From working dogs to family pets, canines come
          in a wide variety of breeds, each with its own unique characteristics and traits.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Popular Dog Breeds</h2>
        <ul className="list-disc list-inside mb-6">
          {popularBreeds.map((breed) => (
            <li key={breed} className="text-lg mb-2">{breed}</li>
          ))}
        </ul>
        <p className="text-lg">
          Whether you're a long-time dog owner or considering getting your first puppy,
          dogs can bring joy, laughter, and companionship to your life. Remember that
          owning a dog is a big responsibility, requiring time, care, and love.
        </p>
      </div>
    </div>
  );
};

export default Index;
