import{PA as e,R1 as x,R6 as P,R7 as v,R8 as y,R9 as j,PB as k,PD as t,PE as h,Ra as c,Rb as m,Rc as d,Rd as g,Re as C,QE as A,Rf as N}from"./index-CX5qyL3S.js";const f=[{name:"Anna",email:"anna@example.com",age:18},{name:"Homer",email:"homer@example.com",age:35},{name:"Oscar",email:"oscar@example.com",age:52},{name:"Emily",email:"emily@example.com",age:30},{name:"Jara",email:"jara@example.com",age:25},{name:"Clark",email:"clark@example.com",age:39},{name:"Jennifer",email:"jennifer@example.com",age:52},{name:"Tony",email:"tony@example.com",age:30},{name:"Tom",email:"tom@example.com",age:25},{name:"Michael",email:"michael@example.com",age:39},{name:"Antony",email:"antony@example.com",age:39},{name:"Raymond",email:"raymond@example.com",age:52},{name:"Marie",email:"marie@example.com",age:30},{name:"Cohen",email:"cohen@example.com",age:25},{name:"Rowen",email:"rowen@example.com",age:39},{name:"John",email:"john@example.com",age:25},{name:"Emily",email:"emily@example.com",age:31},{name:"Alice",email:"alice@example.com",age:42},{name:"David",email:"david@example.com",age:29},{name:"Sullivan Benton",email:"sullivan@example.com",age:23},{name:"Uriah Nunez",email:"uriah@example.com",age:32},{name:"Terry Lynch",email:"terry@example.com",age:45},{name:"Lailah Green",email:"lailah@example.com",age:25},{name:"Phillip Mack",email:"phillip@example.com",age:21},{name:"Whitney Sawyer",email:"whitney@example.com",age:12},{name:"Jaliyah Ritter",email:"jaliyah@example.com",age:12},{name:"Clayton Arnold",email:"clayton@example.com",age:52},{name:"Jett Donovan",email:"jett@example.com",age:31},{name:"Javion Christensen",email:"javion@example.com",age:25},{name:"Brittany Griffin",email:"brittany@example.com",age:41},{name:"Dustin Middleton",email:"dustin@example.com",age:45},{name:"Janessa Mann",email:"janessa@example.com",age:65},{name:"Evangeline Santos",email:"evangeline@example.com",age:32},{name:"Parker Todd",email:"parker@example.com",age:41},{name:"Jaxson Gill",email:"jaxson@example.com",age:33},{name:"Lucille",email:"lucille@example.com",age:34},{name:"Terrell",email:"terrell@example.com",age:35},{name:"Shayna",email:"shayna@example.com",age:36},{name:"Alvaro",email:"alvaro@example.com",age:37},{name:"Clay",email:"clay@example.com",age:37},{name:"Oscar",email:"oscar@example.com",age:37},{name:"Tabitha",email:"tabitha@example.com",age:37},{name:"Jordon",email:"jordon@example.com",age:37}],D=[{id:1,name:"Making the Butterflies shoot each other dead",start:"Dec 12, 2018",task:287,status:{label:"completed",type:"success"}},{id:2,name:"Project Doughnut Dungeon",start:"Jan 9, 2019",task:125,status:{label:"inactive",type:"warning"}},{id:3,name:"The Chewing Gum Attack",start:"Sep 4, 2019",task:72,status:{label:"ongoing",type:"primary"}},{id:4,name:"Execution of Micky the foul mouse",start:"Nov 1, 2019",task:91,status:{label:"critical",type:"danger"}},{id:5,name:"Harnessing stupidity from Jerry",start:"Dec 28, 2019",task:134,status:{label:"ongoing",type:"primary"}},{id:6,name:"Water resistant mosquito killer gun",start:"Feb 24, 2020",task:24,status:{label:"cancelled",type:"secondary"}},{id:7,name:"Olga Dies Dreaming by Xóchitl González",start:"Feb 24, 2020",task:24,status:{label:"cancelled",type:"secondary"}}],p=`
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';
`,T=`
type Data = {
  name: string;
  email: string;
  age: number;
};

const data: Data[] = [
  {
    name: 'Anna',
    email: 'anna@example.com',
    age: 18
  },
  {
    name: 'Homer',
    email: 'homer@example.com',
    age: 35
  },
  {
    name: 'Oscar',
    email: 'oscar@example.com',
    age: 52
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    age: 30
  },
  {
    name: 'Jara',
    email: 'jara@example.com',
    age: 25
  },
  {
    name: 'Clark',
    email: 'clark@example.com',
    age: 39
  }
];
`,S=`
type Data = {
  name: string;
  email: string;
  age: number;
};

const data: Data[] = [
  {
    name: 'Anna',
    email: 'anna@example.com',
    age: 18
  },
  {
    name: 'Homer',
    email: 'homer@example.com',
    age: 35
  },
  {
    name: 'Oscar',
    email: 'oscar@example.com',
    age: 52
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    age: 30
  },
  {
    name: 'Jara',
    email: 'jara@example.com',
    age: 25
  },
  {
    name: 'Clark',
    email: 'clark@example.com',
    age: 39
  },
  {
    name: 'Jennifer',
    email: 'jennifer@example.com',
    age: 52
  },
  {
    name: 'Tony',
    email: 'tony@example.com',
    age: 30
  },
  {
    name: 'Tom',
    email: 'tom@example.com',
    age: 25
  },
  {
    name: 'Michael',
    email: 'michael@example.com',
    age: 39
  },
  {
    name: 'Antony',
    email: 'antony@example.com',
    age: 39
  },
  {
    name: 'Raymond',
    email: 'raymond@example.com',
    age: 52
  },
  {
    name: 'Marie',
    email: 'marie@example.com',
    age: 30
  },
  {
    name: 'Cohen',
    email: 'cohen@example.com',
    age: 25
  },
  {
    name: 'Rowen',
    email: 'rowen@example.com',
    age: 39
  },
  {
    name: 'John',
    email: 'john@example.com',
    age: 25
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    age: 31
  },
  {
    name: 'Alice',
    email: 'alice@example.com',
    age: 42
  },
  {
    name: 'David',
    email: 'david@example.com',
    age: 29
  },
  {
    name: 'Sullivan Benton',
    email: 'sullivan@example.com',
    age: 23
  },
  {
    name: 'Uriah Nunez',
    email: 'uriah@example.com',
    age: 32
  },
  {
    name: 'Terry Lynch',
    email: 'terry@example.com',
    age: 45
  },
  {
    name: 'Lailah Green',
    email: 'lailah@example.com',
    age: 25
  },
  {
    name: 'Phillip Mack',
    email: 'phillip@example.com',
    age: 21
  },
  {
    name: 'Whitney Sawyer',
    email: 'whitney@example.com',
    age: 12
  },
  {
    name: 'Jaliyah Ritter',
    email: 'jaliyah@example.com',
    age: 12
  },
  {
    name: 'Clayton Arnold',
    email: 'clayton@example.com',
    age: 52
  },
  {
    name: 'Jett Donovan',
    email: 'jett@example.com',
    age: 31
  },
  {
    name: 'Javion Christensen',
    email: 'javion@example.com',
    age: 25
  },
  {
    name: 'Brittany Griffin',
    email: 'brittany@example.com',
    age: 41
  },
  {
    name: 'Dustin Middleton',
    email: 'dustin@example.com',
    age: 45
  },
  {
    name: 'Janessa Mann',
    email: 'janessa@example.com',
    age: 65
  },
  {
    name: 'Evangeline Santos',
    email: 'evangeline@example.com',
    age: 32
  },
  {
    name: 'Parker Todd',
    email: 'parker@example.com',
    age: 41
  },
  {
    name: 'Jaxson Gill',
    email: 'jaxson@example.com',
    age: 33
  },
  {
    name: 'Lucille',
    email: 'lucille@example.com',
    age: 34
  },
  {
    name: 'Terrell',
    email: 'terrell@example.com',
    age: 35
  },
  {
    name: 'Shayna',
    email: 'shayna@example.com',
    age: 36
  },
  {
    name: 'Alvaro',
    email: 'alvaro@example.com',
    age: 37
  },
  {
    name: 'Clay',
    email: 'clay@example.com',
    age: 37
  },
  {
    name: 'Oscar',
    email: 'oscar@example.com',
    age: 37
  },
  {
    name: 'Tabitha',
    email: 'tabitha@example.com',
    age: 37
  },
  {
    name: 'Jordon',
    email: 'jordon@example.com',
    age: 37
  }
];
`,b=`
const columns: ColumnDef<Data>[] = [
  {
    accessorKey: 'name'
  },
  {
    accessorKey: 'email',
    cell: ({ row: { original } }) => (
      <Link to={\`mailto:\${original.email}\`}>{original.email}</Link>
    )
  },
  {
    accessorKey: 'age'
  },

  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { style: { width: '7%' } },
      cellProps: { className: 'text-end' }
    }
  }
];
`,F=`
${p}
${T}
${b}
const Example = () => {
  const table = useAdvanceTable({
    data: data,
    columns,
    selection: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-translucent'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
    </AdvanceTableProvider>
  );
};
`,E=`
${p}
${S}
${b}
const PaginationExample = () => {
  const table = useAdvanceTable({
    data: data,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-translucent'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter pagination />
    </AdvanceTableProvider>
  );
};
`,R=`

const PaginationExample = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });

   const table = useAdvanceTable({
    data: tableData, // Your fetched data
    columns,
    sortable: true,
    manualPagination: true, // turn off client-side pagination
    rowCount: tableData.length,
    onPaginationChange: setPagination,
    state: {
      pagination
    }
  });
};
`,B=`
${p}
import { ChangeEvent } from 'react';
import SearchBox from 'components/common/SearchBox';

${T}
${b}
const SearchExample = () => {
  const table = useAdvanceTable({
    data: data,
    columns,
    pageSize: 5,
    pagination:true,
    selection: true,
    sortable: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <AdvanceTableProvider {...table}>
      <SearchBox
        placeholder="Search..."
        size="sm"
        onChange={handleSearchInputChange}
        className="mx-auto mb-4"
      />
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-translucent'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};
`,I=`
${p}
import Badge, { BadgeBg } from 'components/base/Badge';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import { useMemo } from 'react';

type Project = {
  id: number;
  name: string;
  start: string;
  task: number;
  status: {
    label: string;
    type: BadgeBg;
  };
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Making the Butterflies shoot each other dead',
    start: 'Dec 12, 2018',
    task: 287,
    status: {
      label: 'completed',
      type: 'success'
    }
  },
  {
    id: 2,
    name: 'Project Doughnut Dungeon',
    start: 'Jan 9, 2019',
    task: 125,
    status: {
      label: 'inactive',
      type: 'warning'
    }
  },
  {
    id: 3,
    name: 'The Chewing Gum Attack',
    start: 'Sep 4, 2019',
    task: 72,
    status: {
      label: 'ongoing',
      type: 'primary'
    }
  },
  {
    id: 4,
    name: 'Execution of Micky the foul mouse',
    start: 'Nov 1, 2019',
    task: 91,
    status: {
      label: 'critical',
      type: 'danger'
    }
  },
  {
    id: 5,
    name: 'Harnessing stupidity from Jerry',
    start: 'Dec 28, 2019',
    task: 134,
    status: {
      label: 'ongoing',
      type: 'primary'
    }
  },
  {
    id: 6,
    name: 'Water resistant mosquito killer gun',
    start: 'Feb 24, 2020',
    task: 24,
    status: {
      label: 'cancelled',
      type: 'secondary'
    }
  },
  {
    id: 7,
    name: 'Olga Dies Dreaming by Xóchitl González',
    start: 'Feb 24, 2020',
    task: 24,
    status: {
      label: 'cancelled',
      type: 'secondary'
    }
  }
];

const projectListTableColumns: ColumnDef<Project>[] = [
  {
    accessorKey: 'name',
    header: 'Project Name',
    cell: ({ row: { original } }) => {
      const { name } = original;
      return (
        <Link to="#!" className="text-decoration-none fw-bold fs-8">
          {name}
        </Link>
      );
    },
    meta: {
      cellProps: { className: 'white-space-nowrap py-4' }
    }
  },

  {
    header: 'Start date',
    accessorKey: 'start',
    meta: {
      cellProps: { className: 'ps-3 fs-9 text-body white-space-nowrap py-4' },
      headerProps: { className: 'ps-3' }
    }
  },

  {
    accessorKey: 'task',
    header: 'Task',
    meta: {
      cellProps: { className: 'ps-3 text-body py-4' },
      headerProps: { className: 'ps-3' }
    }
  },

  {
    id: 'status',
    header: 'Status',
    accessorFn: ({ status }) => status.label,
    cell: ({ row: { original } }) => {
      const { status } = original;
      return (
        <Badge variant="phoenix" bg={status.type}>
          {status.label}
        </Badge>
      );
    },
    meta: {
      cellProps: { className: 'ps-8 py-4' },
      headerProps: { className: 'ps-8' }
    }
  },
  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { style: { width: '10%' }, className: 'text-end' },
      cellProps: { className: 'text-end' }
    }
  }
];

const FilterByColumnExample = () => {
  const table = useAdvanceTable({
    data: projects,
    columns: projectListTableColumns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  const { getColumn, getPrePaginationRowModel } = table;

  const handleFilterItemClick = (columnId: string, value: string) => {
    const column = getColumn(columnId);
    column?.setFilterValue(value === 'all' ? '' : value);
  };

  const tabItems: FilterTabItem[] = useMemo(() => {
    const getDataCount = (label: string) =>
      getPrePaginationRowModel().rows.filter(
        ({ original: { status } }: any) => status.label === label
      ).length;

    return [
      {
        label: 'All',
        value: 'all',
        onClick: () => handleFilterItemClick('status', 'all'),
        count: getPrePaginationRowModel().rows.length
      },
      {
        label: 'Ongoing',
        value: 'ongoing',
        onClick: () => handleFilterItemClick('status', 'ongoing'),
        count: getDataCount('ongoing')
      },
      {
        label: 'Cancelled',
        value: 'cancelled',
        onClick: () => handleFilterItemClick('status', 'cancelled'),
        count: getDataCount('cancelled')
      },
      {
        label: 'Completed',
        value: 'completed',
        onClick: () => handleFilterItemClick('status', 'completed'),
        count: getDataCount('completed')
      },
      {
        label: 'Critical',
        value: 'critical',
        onClick: () => handleFilterItemClick('status', 'critical'),
        count: getDataCount('critical')
      }
    ];
  }, [getPrePaginationRowModel]);

  return (
    <AdvanceTableProvider {...table}>
      <FilterTab tabItems={tabItems} className="mb-3" />
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-translucent'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};
`,z=`
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';

const YourTableComponent = () => {

  const table = useAdvanceTable({
    data = [...], // Your array of data objects
    columns = [...], // Your array of column definitions
    selection = true, // Enable selection column
    sortable = true, // Enable sorting,
    pagination = true, // Enable pagination
    pageSize = 10 // Number of rows per page
  });

  return (
    // Now pass the table variable to the AdvanceTableProvider to make it available in all nested components
    <AdvanceTableProvider {...table}> 
    {/* Your application components */}
    </AdvanceTableProvider>
  );
};
`,M=`
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import AdvanceTable from 'components/base/AdvanceTable';

const YourComponent = () => {
  const table = useAdvanceTableContext();

  return (
    <>
      <AdvanceTable
        headerClassName="your-header-class"
        bodyClassName="your-body-class"
        rowClassName="your-row-class"
        tableProps={{
          striped: true,
          bordered: true,
          size: 'sm',
          // other react-bootstrap table props
        }}
      />
      <AdvanceTableFooter
        className="table-footer"
        pagination={true}
        navBtn={true}
      />
    </>

  );
};
`,J=[{name:"Anna",email:"anna@example.com",age:18},{name:"Homer",email:"homer@example.com",age:35},{name:"Oscar",email:"oscar@example.com",age:52},{name:"Emily",email:"emily@example.com",age:30},{name:"Jara",email:"jara@example.com",age:25},{name:"Clark",email:"clark@example.com",age:39}],u=[{accessorKey:"name"},{accessorKey:"email",cell:({row:{original:a}})=>e.jsx(x,{to:`mailto:${a.email}`,children:a.email})},{accessorKey:"age"},{id:"action",cell:()=>e.jsx(v,{children:e.jsx(y,{children:e.jsx(j,{})})}),meta:{headerProps:{style:{width:"7%"}},cellProps:{className:"text-end"}}}],H=()=>{const a=c({data:J,columns:u,selection:!0,sortable:!0});return e.jsx(m,{...a,children:e.jsx(d,{tableProps:{size:"sm",className:"phoenix-table fs-9 mb-0 border-top border-translucent"},rowClassName:"hover-actions-trigger btn-reveal-trigger position-static"})})},L=()=>{const a=c({data:f,columns:u,pageSize:6,pagination:!0,selection:!0,sortable:!0});return e.jsxs(m,{...a,children:[e.jsx(d,{tableProps:{size:"sm",className:"phoenix-table fs-9 mb-0 border-top border-translucent"},rowClassName:"hover-actions-trigger btn-reveal-trigger position-static"}),e.jsx(g,{pagination:!0})]})},$=()=>{const a=c({data:f,columns:u,pageSize:6,pagination:!0,selection:!0,sortable:!0}),n=o=>{a.setGlobalFilter(o.target.value||void 0)};return e.jsxs(m,{...a,children:[e.jsx(C,{placeholder:"Search...",size:"sm",onChange:n,className:"mx-auto mb-4"}),e.jsx(d,{tableProps:{size:"sm",className:"phoenix-table fs-9 mb-0 border-top border-translucent"},rowClassName:"hover-actions-trigger btn-reveal-trigger position-static"}),e.jsx(g,{navBtn:!0})]})},G=[{accessorKey:"name",header:"Project Name",cell:({row:{original:a}})=>{const{name:n}=a;return e.jsx(x,{to:"#!",className:"text-decoration-none fw-bold fs-8",children:n})},meta:{cellProps:{className:"white-space-nowrap py-4"}}},{header:"Start date",accessorKey:"start",meta:{cellProps:{className:"ps-3 fs-9 text-body white-space-nowrap py-4"},headerProps:{className:"ps-3"}}},{accessorKey:"task",header:"Task",meta:{cellProps:{className:"ps-3 text-body py-4"},headerProps:{className:"ps-3"}}},{id:"status",header:"Status",accessorFn:({status:a})=>a.label,cell:({row:{original:a}})=>{const{status:n}=a;return e.jsx(P,{variant:"phoenix",bg:n.type,children:n.label})},meta:{cellProps:{className:"ps-8 py-4"},headerProps:{className:"ps-8"}}},{id:"action",cell:()=>e.jsx(v,{children:e.jsx(y,{children:e.jsx(j,{})})}),meta:{headerProps:{style:{width:"10%"},className:"text-end"},cellProps:{className:"text-end"}}}],K=()=>{const a=c({data:D,columns:G,pageSize:6,pagination:!0,selection:!0,sortable:!0}),{getColumn:n,getPrePaginationRowModel:o}=a,s=(l,i)=>{const r=n(l);r==null||r.setFilterValue(i==="all"?"":i)},w=A.useMemo(()=>{const l=i=>o().rows.filter(({original:{status:r}})=>r.label===i).length;return[{label:"All",value:"all",onClick:()=>s("status","all"),count:o().rows.length},{label:"Ongoing",value:"ongoing",onClick:()=>s("status","ongoing"),count:l("ongoing")},{label:"Cancelled",value:"cancelled",onClick:()=>s("status","cancelled"),count:l("cancelled")},{label:"Completed",value:"completed",onClick:()=>s("status","completed"),count:l("completed")},{label:"Critical",value:"critical",onClick:()=>s("status","critical"),count:l("critical")}]},[o]);return e.jsxs(m,{...a,children:[e.jsx(N,{tabItems:w,className:"mb-3"}),e.jsx(d,{tableProps:{size:"sm",className:"phoenix-table fs-9 mb-0 border-top border-translucent"},rowClassName:"hover-actions-trigger btn-reveal-trigger position-static"}),e.jsx(g,{navBtn:!0})]})},U=()=>e.jsxs("div",{children:[e.jsx(k,{title:"Advance Tables",link:{text:"Tanstack table documentation",url:"https://tanstack.com/table/v8"},children:e.jsxs("div",{children:["Phoenix","-React uses"," ",e.jsx("strong",{children:"TanStack Table"})," for advance features of table."," ",e.jsx("strong",{children:"TanStack Table"})," is a headless UI for building powerful tables & datagrids. ",e.jsx("strong",{children:"TanStack Table's"})," API and engine are highly modular and framework-independent while still prioritizing ergonomics."]})}),e.jsxs(t,{className:"mb-4",children:[e.jsx(t.Header,{title:"How to use",noPreview:!0}),e.jsxs(t.Body,{children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("p",{className:"mb-2",children:["The ",e.jsx("strong",{children:"Advance Table"})," components consist of two main parts. These components work together to enable you to easily integrate complex table features into your application."]}),e.jsxs("ul",{className:"mb-3",children:[e.jsxs("li",{className:"mb-1",children:[e.jsx("strong",{children:"useAdvanceTable :"})," A custom hook that initializes the table with provided data, columns, and options. The ",e.jsx("code",{children:"useAdvanceTable"})," hook is used to set up the table with your data and configuration options. It returns a"," ",e.jsx("code",{children:"table"})," object containing various methods and properties to interact with the table's functionality."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"AdvanceTableProvider :"})," A context provider that encapsulates the state and functionality of the table. The"," ",e.jsx("code",{children:"AdvanceTableProvider"})," makes the context for the table available to all nested components. It takes care of initializing the table and its functionality."]})]}),e.jsxs("div",{className:"ms-3",children:[e.jsx("p",{children:"Here's how you can use this two together: "}),e.jsx(h,{code:z})]})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("h5",{className:"mb-2",children:"UI Components"}),e.jsxs("p",{className:"mb-2",children:["To simplify the process of rendering complex tables while providing a smooth integration with the"," ",e.jsx("code",{children:"AdvanceTableProvider"})," we created two UI components:"," ",e.jsx("code",{children:"AdvanceTable"})," and ",e.jsx("code",{children:"AdvanceTableFooter"})]}),e.jsxs("ul",{className:"mb-3",children:[e.jsxs("li",{className:"mb-1",children:[e.jsx("strong",{children:"AdvanceTable :"})," The ",e.jsx("code",{children:"AdvanceTable"})," ","component is a flexible and customizable table UI component designed to work seamlessly with the"," ",e.jsx("code",{children:"AdvanceTableProvider"}),". The AdvanceTable component accepts the following props:",e.jsxs("ul",{className:"mb-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"headerClassName"}),": Custom class name for the"," ",e.jsx("code",{children:"thead"})," element."]}),e.jsxs("li",{children:[e.jsx("code",{children:"bodyClassName"}),": Custom class name for the"," ",e.jsx("code",{children:"tbody"})," element."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rowClassName"}),": Custom class name for the rows (tr elements)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"tableProps"}),": Props to be passed to the underlying ",e.jsx("code",{children:"Table"}),"component from ",e.jsx("code",{children:"react-bootstrap."})]})]})]}),e.jsxs("li",{className:"mb-1",children:[e.jsx("strong",{children:"AdvanceTableFooter :"})," The"," ",e.jsx("code",{children:"AdvanceTableFooter"})," component is designed to enhance the footer of the advanced table by providing various pagination controls and information about the current page and item counts. The AdvanceTableFooter component accepts the following props:",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"className"})," : Custom class name for the footer container."]}),e.jsxs("li",{children:[e.jsx("code",{children:"pagination"})," : Boolean indicating whether to display the pagination"]}),e.jsxs("li",{children:[e.jsx("code",{children:"navBtn"})," : Boolean indicating whether to display the previous and next navigation buttons."]})]})]})]}),e.jsxs("div",{className:"ms-3",children:[e.jsx("p",{children:"Here's how you can use these components: "}),e.jsx(h,{code:M})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"mb-2",children:"Column definition"}),e.jsxs("div",{children:["For ",e.jsx("strong",{children:"Advance Table's"})," column definition visit"," ",e.jsx("strong",{children:"tanstack react table's"})," ",e.jsx("a",{href:"https://tanstack.com/table/v8/docs/api/core/column-def",target:"_blank",rel:"noreferrer",children:"Official documentation"}),e.jsx("br",{}),"In addition to the standard properties for defining columns in a table, you can add ",e.jsx("code",{children:"cellProps"})," and"," ",e.jsx("code",{children:"headerProps"})," within the ",e.jsx("code",{children:"meta"})," property of your column definitions.",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"cellProps"})," : when placed within the"," ",e.jsx("code",{children:"meta"})," object of a column definition, allows you to add specific HTML attributes to the data cells within the column. This enables you to apply styling, classes, or event handlers to cells as needed."]}),e.jsxs("li",{children:[e.jsx("code",{children:"headerProps"})," : when placed within the meta object is used to apply HTML attributes to the header cell of the column. This allows you to add attributes like classes or event handlers to the column headers."]}),e.jsxs("li",{children:[e.jsx("code",{children:"footerProps"})," : This prop allows you to specify additional HTML attributes for the footer cell element in a table header to enhance its appearance or behavior."]})]})]})]})]})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(t.Header,{title:"Example"}),e.jsx(t.Body,{code:F,hidePreview:!0,children:e.jsx(H,{})})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(t.Header,{title:"Pagination Example"}),e.jsx(t.Body,{code:E,hidePreview:!0,children:e.jsx(L,{})})]}),e.jsx("div",{children:e.jsxs(t,{className:"mb-4",children:[e.jsx(t.Header,{title:"Serverside Pagination",noPreview:!0}),e.jsxs(t.Body,{children:[e.jsxs("p",{children:["Add pagination state to your table component and all pass the following options to enable serverside pagination. For more information check trastake table documentation. Hare is some important links may help you to configure serverside table"," ",e.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://tanstack.com/table/latest/docs/guide/pagination#manual-server-side-pagination",children:"serverside-pagination"})," ",e.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://tanstack.com/table/latest/docs/framework/react/examples/pagination-controlled",children:"pagination-controlled"})," ",e.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://tanstack.com/table/latest/docs/guide/column-filtering#manual-server-side-filtering",children:"filtering"})," ",e.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://tanstack.com/table/latest/docs/guide/sorting#manual-server-side-sorting",children:"sorting"}),"."]}),e.jsx(h,{code:R})]})]})}),e.jsxs(t,{className:"mb-4",children:[e.jsx(t.Header,{title:"Search Example"}),e.jsx(t.Body,{code:B,hidePreview:!0,children:e.jsx($,{})})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(t.Header,{title:"Column filter example"}),e.jsx(t.Body,{code:I,hidePreview:!0,children:e.jsx(K,{})})]})]});export{U as default,G as projectListTableColumns};
