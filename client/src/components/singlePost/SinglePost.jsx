import './singlePost.css';

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          src='https://images.pexels.com/photos/4017166/pexels-photo-4017166.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
          alt=''
          className='singlePostImg'
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum, dolor sit amet
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>A Lee</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          voluptatem voluptate laboriosam dicta animi atque impedit delectus
          architecto error expedita praesentium placeat fugit repellendus eum
          deserunt nihil tenetur molestiae deleniti minima dignissimos, hic
          asperiores at distinctio! Quas, adipisci ullam. Cupiditate maiores
          mollitia alias quis, molestiae dicta magni cum. Distinctio
          perspiciatis nisi quis. Nam dicta rerum at fugiat, dignissimos
          recusandae ad! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Autem impedit assumenda vitae, eum tempora nihil voluptatem
          cupiditate quia, velit ut quasi sit culpa? Consequatur pariatur ad
          illum esse similique nobis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsa voluptatem voluptate laboriosam dicta animi
          atque impedit delectus architecto error expedita praesentium placeat
          fugit repellendus eum deserunt nihil tenetur molestiae deleniti minima
          dignissimos, hic asperiores at distinctio! Quas, adipisci ullam.
          Cupiditate maiores mollitia alias quis, molestiae dicta magni cum.
          Distinctio perspiciatis nisi quis. Nam dicta rerum at fugiat,
          dignissimos recusandae ad! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Autem impedit assumenda vitae, eum tempora nihil
          voluptatem cupiditate quia, velit ut quasi sit culpa? Consequatur
          pariatur ad illum esse similique nobis? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsa voluptatem voluptate laboriosam
          dicta animi atque impedit delectus architecto error expedita
          praesentium placeat fugit repellendus eum deserunt nihil tenetur
          molestiae deleniti minima dignissimos, hic asperiores at distinctio!
          Quas, adipisci ullam. Cupiditate maiores mollitia alias quis,
          molestiae dicta magni cum. Distinctio perspiciatis nisi quis. Nam
          dicta rerum at fugiat, dignissimos recusandae ad! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Autem impedit assumenda vitae,
          eum tempora nihil voluptatem cupiditate quia, velit ut quasi sit
          culpa? Consequatur pariatur ad illum esse similique nobis?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
