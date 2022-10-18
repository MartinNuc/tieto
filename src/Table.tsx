
type Props = {
  rows: number,
  columns: number,
};

export function Table(props: Props) {
  const rowsArray = new Array(props.rows).fill(0);
  const columnsArray = new Array(props.columns).fill(0);

  return <table>
    {rowsArray.map((_, index) => (
      <tr key={index}>
        {columnsArray.map((_, index) => (
          <td key={index}>
            Hello
          </td>
        ))}
      </tr>
    ))}
  </table>
}
