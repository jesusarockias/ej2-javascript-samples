window.checkBoxData = [
        { id: 1, name: 'Australia', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'New South Wales' },
        { id: 3, pid: 1, name: 'Victoria' },
        { id: 4, pid: 1, name: 'South Australia' },
        { id: 6, pid: 1, name: 'Western Australia' },
        { id: 7, name: 'Brazil', hasChild: true },
        { id: 8, pid: 7, name: 'Paraná' },
        { id: 9, pid: 7, name: 'Ceará' },
        { id: 10, pid: 7, name: 'Acre' },
        { id: 11, name: 'China', hasChild: true },
        { id: 12, pid: 11, name: 'Guangzhou' },
        { id: 13, pid: 11, name: 'Shanghai' },
        { id: 14, pid: 11, name: 'Beijing' },
        { id: 15, pid: 11, name: 'Shantou' },
        { id: 16, name: 'France', hasChild: true },
        { id: 17, pid: 16, name: 'Pays de la Loire' },
        { id: 18, pid: 16, name: 'Aquitaine' },
        { id: 19, pid: 16, name: 'Brittany' },
        { id: 20, pid: 16, name: 'Lorraine' },
        { id: 21, name: 'India', hasChild: true },
        { id: 22, pid: 21, name: 'Assam' },
        { id: 23, pid: 21, name: 'Bihar' },
        { id: 24, pid: 21, name: 'Tamil Nadu' },
        { id: 25, pid: 21, name: 'Punjab' }
];
// Hierarchical data source for TreeView component
window.hierarchicalData = [
    { id: '01', name: 'Local Disk (C:)', expanded: true,
        subChild: [
            {
                id: '01-01', name: 'Program Files',
                subChild: [
                    { id: '01-01-01', name: 'Windows NT' },
                    { id: '01-01-02', name: 'Windows Mail' },
                    { id: '01-01-03', name: 'Windows Photo Viewer' },
                ]
            },
            {
                id: '01-02', name: 'Users', expanded: true,
                subChild: [
                    { id: '01-02-01', name: 'Smith' },
                    { id: '01-02-02', name: 'Public' },
                    { id: '01-02-03', name: 'Admin' },
                ]
            },
            {
                id: '01-03', name: 'Windows',
                subChild: [
                    { id: '01-03-01', name: 'Boot' },
                    { id: '01-03-02', name: 'FileManager' },
                    { id: '01-03-03', name: 'System32' },
                ]
            },
        ]
    },
    { id: '02', name: 'Local Disk (D:)',
        subChild: [
            {
                id: '02-01', name: 'Personals',
                subChild: [
                    { id: '02-01-01', name: 'My photo.png' },
                    { id: '02-01-02', name: 'Rental document.docx' },
                    { id: '02-01-03', name: 'Pay slip.pdf' },
                ]
            },
            {
                id: '02-02', name: 'Projects',
                subChild: [
                    { id: '02-02-01', name: 'ASP Application' },
                    { id: '02-02-02', name: 'TypeScript Application' },
                    { id: '02-02-03', name: 'React Application' },
                ]
            },
            {
                id: '02-03', name: 'Office',
                subChild: [
                    { id: '02-03-01', name: 'Work details.docx' },
                    { id: '02-03-02', name: 'Weekly report.docx' },
                    { id: '02-03-03', name: 'Wish list.csv' },
                ]
            },
        ]
    },
    { id: '03', name: 'Local Disk (E:)', icon: 'folder',
        subChild: [
            {
                id: '03-01', name: 'Pictures',
                subChild: [
                    { id: '03-01-01', name: 'Wind.jpg' },
                    { id: '03-01-02', name: 'Stone.jpg' },
                    { id: '03-01-03', name: 'Home.jpg' },
                ]
            },
            {
                id: '03-02', name: 'Documents',
                subChild: [
                    { id: '03-02-01', name: 'Environment Pollution.docx' },
                    { id: '03-02-02', name: 'Global Warming.ppt' },
                    { id: '03-02-03', name: 'Social Network.pdf' },
                ]
            },
            {
                id: '03-03', name: 'Study Materials',
                subChild: [
                    { id: '03-03-01', name: 'UI-Guide.pdf' },
                    { id: '03-03-02', name: 'Tutorials.zip' },
                    { id: '03-03-03', name: 'TypeScript.7z' },
                ]
            },
        ]
    }
];
// Hierarchical data source for first TreeView component
window.productTeam1 = [
    {
            id: 't1', name: 'ASP.NET MVC Team', expanded: true,
            child: [
                { id: 't2' , pid: 't1', name: 'Smith' },
                { id: 't3', pid: 't1', name: 'Johnson' },
                { id: 't4', pid: 't1', name: 'Anderson' },
            ]
        },
        {
            id: 't5', name: 'Windows Team',  expanded: true,
            child: [
                { id: 't6', pid: 't5', name: 'Clark' },
                { id: 't7', pid: 't5', name: 'Wright' },
                { id: 't8', pid: 't5', name: 'Lopez' },
            ]
        },
];
// Hierarchical data source for second TreeView component
window.productTeam2 = [
    {
            id: 't9' , name: 'Web Team',expanded: true,
            child: [
                { id: 't11' , pid: 't9' , name: 'Joshua' },
                { id: 't12', pid: 't9' , name: 'Matthew' },
                { id: 't13', pid: 't9' , name: 'David' },
            ]
        },
        {
            id: 't14', name: 'Build Team', expanded: true,
            child: [
                { id: 't15' , pid: 't14' , name: 'Ryan' },
                { id: 't16' , pid: 't14' , name: 'Justin' },
                { id: 't17' , pid: 't14', name: 'Robert' },
            ]
        },
];
window.treeData = [
    {
        id: 1, name: 'Discover Music', expanded: true,
        child: [
            { id: 2, name: 'Hot Singles' },
            { id: 3, name: 'Rising Artists' },
            { id: 4, name: 'Live Music' }
        ]
    },
    {
        id: 7, name: 'Sales and Events',
        child: [
            { id: 8, name: '100 Albums - $5 Each' },
            { id: 9, name: 'Hip-Hop and R&B Sale' },
            { id: 10, name: 'CD Deals' }
        ]
    },
    {
        id: 11, name: 'Categories',
        child: [
            { id: 12, name: 'Songs' },
            { id: 13, name: 'Bestselling Albums' },
            { id: 14, name: 'New Releases' },
            { id: 15, name: 'Bestselling Songs' }
        ]
    },
    {
        id: 16, name: 'MP3 Albums',
        child: [
            { id: 17, name: 'Rock' },
            { id: 18, name: 'Gospel' },
            { id: 19, name: 'Latin Music' },
            { id: 20, name: 'Jazz' }
        ]
    },
    {
        id: 21, name: 'More in Music',
        child: [
            { id: 22, name: 'Music Trade-In' },
            { id: 23, name: 'Redeem a Gift Card' },
            { id: 24, name: 'Band T-Shirts' }
        ]
    }
];
window.treeViewData = [
    {
        nodeId: '01', nodeText: 'Music', icon: 'folder',
        nodeChild: [
            { nodeId: '01-01', nodeText: 'Gouttes.mp3', icon: 'audio' }
        ]
    },
    {
        nodeId: '02', nodeText: 'Videos', icon: 'folder',
        nodeChild: [
            { nodeId: '02-01', nodeText: 'Naturals.mp4', icon: 'video' },
            { nodeId: '02-02', nodeText: 'Wild.mpeg', icon: 'video' },
        ]
    },
    {
        nodeId: '03', nodeText: 'Documents', icon: 'folder',
        nodeChild: [
            { nodeId: '03-01', nodeText: 'Environment Pollution.docx', icon: 'docx' },
            { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx', icon: 'docx' },
            { nodeId: '03-03', nodeText: 'Global Warming.ppt', icon: 'ppt' },
            { nodeId: '03-04', nodeText: 'Social Network.pdf', icon: 'pdf' },
            { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf', icon: 'pdf' },
        ]
    },
    {
        nodeId: '04', nodeText: 'Pictures', icon: 'folder', expanded: true,
        nodeChild: [
            {
                nodeId: '04-01', nodeText: 'Camera Roll', icon: 'folder', expanded: true,
                nodeChild: [
                    { nodeId: '04-01-01', nodeText: 'WIN_20160726_094117.JPG', image: 'src/treeview/images/employees/9.png' },
                    { nodeId: '04-01-02', nodeText: 'WIN_20160726_094118.JPG', image: 'src/treeview/images/employees/3.png' },
                ]
            },
            { nodeId: '04-02', nodeText: 'Wind.jpg', icon: 'images' },
            { nodeId: '04-03', nodeText: 'Stone.jpg', icon: 'images' },
        ]
    },
    {
        nodeId: '05', nodeText: 'Downloads', icon: 'folder',
        nodeChild: [
            { nodeId: '05-01', nodeText: 'UI-Guide.pdf', icon: 'pdf' },
            { nodeId: '05-02', nodeText: 'Tutorials.zip', icon: 'zip' },
            { nodeId: '05-03', nodeText: 'Game.exe', icon: 'exe' },
            { nodeId: '05-04', nodeText: 'TypeScript.7z', icon: 'zip' },
        ]
    },
];
window.continentData = [
    {
        code: 'NA', name: 'North America', expanded: true, countries: [
            { code: 'USA', name: 'United States of America', selected: true },
            { code: 'CUB', name: 'Cuba' },
            { code: 'MEX', name: 'Mexico' }
        ]
    },
    {
        code: 'AF', name: 'Africa', countries: [
            { code: 'NGA', name: 'Nigeria' },
            { code: 'EGY', name: 'Egypt' },
            { code: 'ZAF', name: 'South Africa' }
        ]
    },
    {
        code: 'AS', name: 'Asia', countries: [
            { code: 'CHN', name: 'China' },
            { code: 'IND', name: 'India' },
            { code: 'JPN', name: 'Japan' }
        ]
    },
    {
        code: 'EU', name: 'Europe', countries: [
            { code: 'DNK', name: 'Denmark' },
            { code: 'FIN', name: 'Finland' },
            { code: 'AUT', name: 'Austria' }
        ]
    },
    {
        code: 'SA', name: 'South America', countries: [
            { code: 'BRA', name: 'Brazil' },
            { code: 'COL', name: 'Colombia' },
            { code: 'ARG', name: 'Argentina' }
        ]
    },
    {
        code: 'OC', name: 'Oceania', countries: [
            { code: 'AUS', name: 'Australia' },
            { code: 'NZL', name: 'New Zealand' },
            { code: 'WSM', name: 'Samoa' }
        ]
    },
    {
        code: 'AN', name: 'Antarctica', countries: [
            { code: 'BVT', name: 'Bouvet Island' },
            { code: 'ATF', name: 'French Southern Lands' }
        ]
    },
];
window.localData = [
    { id: 1, name: 'Discover Music', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'Hot Singles', selected: true },
    { id: 3, pid: 1, name: 'Rising Artists' },
    { id: 4, pid: 1, name: 'Live Music' },
    { id: 7, name: 'Sales and Events', hasChild: true },
    { id: 8, pid: 7, name: '100 Albums - $5 Each' },
    { id: 9, pid: 7, name: 'Hip-Hop and R&B Sale' },
    { id: 10, pid: 7, name: 'CD Deals' },
    { id: 11, name: 'Categories', hasChild: true },
    { id: 12, pid: 11, name: 'Songs' },
    { id: 13, pid: 11, name: 'Bestselling Albums' },
    { id: 14, pid: 11, name: 'New Releases' },
    { id: 15, pid: 11, name: 'Bestselling Songs' },
    { id: 16, name: 'MP3 Albums', hasChild: true },
    { id: 17, pid: 16, name: 'Rock' },
    { id: 18, pid: 16, name: 'Gospel' },
    { id: 19, pid: 16, name: 'Latin Music' },
    { id: 20, pid: 16, name: 'Jazz' },
    { id: 21, name: 'More in Music', hasChild: true },
    { id: 22, pid: 21, name: 'Music Trade-In' },
    { id: 23, pid: 21, name: 'Redeem a Gift Card' },
    { id: 24, pid: 21, name: 'Band T-Shirts' },
    { id: 25, name: 'Fiction Book Lists', hasChild: true },
    { id: 26, pid: 25, name: 'To Kill a Mockingbird' },
    { id: 27, pid: 25, name: 'Pride and Prejudice' },
    { id: 28, pid: 25, name: 'Harry Potter' },
    { id: 29, pid: 25, name: 'The Hobbit' },
];
window.mailBox = [
  { id: 1, name: 'Favorites', hasChild: true },
            { id: 2, pid: 1, name: 'Sales Reports', count: '4' },
            { id: 3, pid: 1, name: 'Sent Items' },
            { id: 4, pid: 1, name: 'Marketing Reports ', count: '6' },
            { id: 5, name: 'My Folder', hasChild: true, expanded: true },
            { id: 6, pid: 5, name: 'Inbox', selected: true, count: '20' },
            { id: 7, pid: 5, name: 'Drafts', count: '5' },
            { id: 8, pid: 5, name: 'Deleted Items' },
            { id: 9, pid: 5, name: 'Sent Items' },
            { id: 10, pid: 5, name: 'Sales Reports', count: '4' },
            { id: 11, pid: 5, name: 'Marketing Reports', count: '6' },
            { id: 13, pid: 5, name: 'Outbox' },
];
window.countries = [
    { id: 1, name: 'Australia', hasChild: true, expanded: true },
    { id: 2, parentId: 1, name: 'New South Wales' },
    { id: 3, parentId: 1, name: 'Victoria', isSelected: true },
    { id: 4, parentId: 1, name: 'South Australia', isSelected: true },
    { id: 6, parentId: 1, name: 'Western Australia' },
    { id: 7, name: 'Brazil', hasChild: true },
    { id: 8, parentId: 7, name: 'Paraná' },
    { id: 9, parentId: 7, name: 'Ceará' },
    { id: 10, parentId: 7, name: 'Acre' },
    { id: 11, name: 'China', hasChild: true },
    { id: 12, parentId: 11, name: 'Guangzhou' },
    { id: 13, parentId: 11, name: 'Shanghai' },
    { id: 14, parentId: 11, name: 'Beijing' },
    { id: 15, parentId: 11, name: 'Shantou' },
    { id: 16, name: 'France', hasChild: true },
    { id: 17, parentId: 16, name: 'Pays de la Loire' },
    { id: 18, parentId: 16, name: 'Aquitaine' },
    { id: 19, parentId: 16, name: 'Brittany' },
    { id: 20, parentId: 16, name: 'Lorraine' },
    { id: 21, name: 'India', hasChild: true },
    { id: 22, parentId: 21, name: 'Assam' },
    { id: 23, parentId: 21, name: 'Bihar' },
    { id: 24, parentId: 21, name: 'Tamil Nadu' },
    { id: 25, parentId: 21, name: 'Punjab' }
];
