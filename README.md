# ![MultipleSelectField](https://user-images.githubusercontent.com/44801418/48110016-73b71300-e27c-11e8-9d6d-3640406cec9d.png) MultipleSelectField

[![npm package][npm-badge]][npm]

Used for selecting multiple options from a list.	

## Getting started

````
npm install @cmds/multiple-select-field --save
````

````jsx harmony
<MultipleSelectField
    id={'fld1'}
    contextId={'recordGalleryCard'}
    roleId={'readOnly'}
    optionIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
    options={{
        coloredOptions: true,
        options: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6'],
        optionsById: {
            'opt1': {
                id: 'opt1',
                colorId: 'blue.base',
                name: 'Blue'
            },
            'opt2': {
                id: 'opt2',
                colorId: 'green.base',
                name: 'Green'
            },
            'opt3': {
                id: 'opt3',
                colorId: 'red.base',
                name: 'Red'
            },
            'opt4': {
                id: 'opt4',
                colorId: 'yellow.base',
                name: 'Yellow'
            },
            'opt5': {
                id: 'opt5',
                colorId: 'indigo.base',
                name: 'Indigo'
            },
            'opt6': {
                id: 'opt6',
                colorId: 'purple.base',
                name: 'Purple'
            }
        }
    }}
/>
````	

[npm-badge]: https://img.shields.io/npm/v/@cmds/multiple-select-field.svg
[npm]: https://www.npmjs.org/package/@cmds/multiple-select-field
