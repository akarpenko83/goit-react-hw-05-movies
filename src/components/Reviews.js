import { useParams } from 'react-router-dom';

const Reviews = () => {
    const { movieId } = useParams();
    return <div>Reviews COMPONENT: {movieId}</div>;
};

export default Reviews;
