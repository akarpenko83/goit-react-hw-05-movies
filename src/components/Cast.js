import { useParams } from 'react-router-dom';

const Cast = () => {
    const { movieId } = useParams();
    return <div>CAST COMPONENT: {movieId}</div>;
};

export default Cast;
