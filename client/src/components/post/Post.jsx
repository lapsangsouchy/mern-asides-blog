import './post.css';

const Post = () => {
  return (
    <div className='posts'>
      <img
        className='postImg'
        src='https://images.pexels.com/photos/10194721/pexels-photo-10194721.jpeg?cs=srgb&dl=pexels-aleksey-sokolenko-10194721.jpg&fm=jpg'
        alt=''
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum, dolor sit amet</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        impedit veritatis sequi aut! Deleniti, dolor vero saepe animi maxime
        expedita, ipsa quam repellat provident laboriosam dolore officia culpa
        et? Est. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptatem impedit veritatis sequi aut! Deleniti, dolor vero saepe animi
        maxime expedita, ipsa quam repellat provident laboriosam dolore officia
        culpa et? Est. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptatem impedit veritatis sequi aut! Deleniti, dolor vero saepe animi
        maxime expedita, ipsa quam repellat provident laboriosam dolore officia
        culpa et? Est.
      </p>
    </div>
  );
};

export default Post;
