import Postcard from "./Postcard";

const Feed = () => {

  const posts = [
    {
      title: 'First Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://picsum.photos/500/300',
    },
    {
      title: 'First Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://picsum.photos/500/300',
    },
    {
      title: 'First Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://picsum.photos/500/300',
    },
    // Add more posts as needed
  ];

  return (
    <section className='gap-2 mt-16 mx-auto'>
      {/* All Posts */}
      <div className="flex flex-wrap justify-center gap-5">
          {posts.map((post, index) => (
            <Postcard key={index} {...post} />
          ))}
      </div>
    </section>
  )
}

export default Feed