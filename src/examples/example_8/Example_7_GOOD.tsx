import {ChangeEvent, memo} from 'react';

const OPTION_VALUES = [10, 20, 30, 40, 50, 100];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Select
const Select = () => {
  return (
    <select>
      {OPTION_VALUES.map(value => (<option value={value}>{value}</option>))}
    </select>
  );
};

type SelectWrapperType = {
  headerTitle: string;
  footerTitle: string;
};

const SelectWrapper = memo((props: SelectWrapperType) => {
  return (
    <div>
      <span>{props.headerTitle}</span>
      <Select />
      <span>{props.footerTitle}</span>
    </div>
  );
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Button
type ButtonType = {
  title: string;
  onClick: () => void
}

const Button = memo((props: ButtonType) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.title}
        <img src="" />
      </button>
    </div>
  );
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Subtitle
const SubTitle = memo((props: { subTittle: string }) => {
  return <span>{props.subTittle}</span>;
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// SearchField
type PropsType = {
  searchValue: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
}

const SearchField = memo((props: PropsType) => {
  return (
    <input
      type="text"
      value={props.searchValue}
      onChange={props.onChange}
    />
  );
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Table

const TABLE_HEAD_VALUES = ['Question', 'Answer', 'Last Updated', 'Grade'];

const TableHead = () => {
  return (
    <thead>
    <tr>
      {TABLE_HEAD_VALUES.map(tableHeadValue => (<th>{tableHeadValue}</th>))}
    </tr>
    </thead>
  );
};

const TableBody = () => {
  const cards = [].map(({_id, question, answer, updated, grade}) => {
    return (
      <tr key={_id}>
        <td>{question}</td>
        <td>{answer}</td>
        <td>{updated}</td>
        <td>{grade}</td>
      </tr>
    );
  });

  return (
    <tbody>
      {cards}
    </tbody>
  )
}

const Table = () => {
  return (
    <div>
      <table>
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Cards
export const Cards = () => {
  return (
    <div>
      <Button
        title="Some title"
        onClick={() => {}}
      />
      <SubTitle subTittle="Some sub - title" />
      <SearchField
        searchValue="Search value"
        onChange={(value: ChangeEvent<HTMLInputElement>) => {}}
      />
      <Table />

      <SelectWrapper
        headerTitle="Title Show"
        footerTitle="Cards per Page"
      />
    </div>
  );
};

// 99 strings
