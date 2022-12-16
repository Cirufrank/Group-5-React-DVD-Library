// eslint-disable-next-line import/no-unresolved

function Dvd({ title, releaseYear, director, rating, notes }) {
  return (
    <tr>
      <td className="font-light text-gray-500">{title}</td>
      <td className="font-light text-gray-500">{releaseYear}</td>
      <td className="font-light text-gray-500">{director}</td>
      <td className="font-light text-gray-500">{rating}</td>
      <td className="font-light text-gray-500">{notes}</td>
    </tr>
  );
}

export default Dvd;
