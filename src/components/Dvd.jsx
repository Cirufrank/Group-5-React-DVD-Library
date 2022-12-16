// eslint-disable-next-line import/no-unresolved

function Dvd({ title, releaseYear, director, rating, notes, detailsUrl }) {
  return (
    <tr className="even:bg-gray-100">
      <td className="font-light text-gray-700 text-lg">{title}</td>
      <td className="font-light text-gray-500 text-lg">{releaseYear}</td>
      <td className="font-light text-gray-500 text-lg">{director}</td>
      <td className="font-light text-gray-500 text-lg">{rating}</td>
      <td className="font-light text-gray-500 text-lg">{notes}</td>
      <td className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><a href={detailsUrl}>View</a></td>
    </tr>
  );
}

export default Dvd;
