module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Cria um novo componente',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do componente:',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Tipo de componente:',
        choices: ['Component'],
      },
    ],
    actions: function (data) {
      const basePath = 'src/components/{{kebabCase name}}';

      let actions = [];

      if (data.type === 'Component') {
        actions = [
          {
            type: 'add',
            path: `${basePath}/index.tsx`,
            templateFile: 'plop-templates/Component.tsx.hbs',
          },
          {
            type: 'add',
            path: `${basePath}/{{kebabCase name}}.module.css`,
            templateFile: 'plop-templates/Component.module.css.hbs',
          },
        ];
      }

      return actions;
    },
  });
  plop.setGenerator('section', {
    description: 'Cria uma nova seção',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome da seção:',
      },
      {
        type: 'route',
        name: 'route',
        message: 'Caminho para ser armazenado:',
      },
    ],
    actions: function () {
      const basePath = 'src/templates/{{kebabCase route}}/{{kebabCase name}}';

      let actions = [];

      actions = [
        {
          type: 'add',
          path: `${basePath}/index.tsx`,
          templateFile: 'plop-templates/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/{{kebabCase name}}.module.css`,
          templateFile: 'plop-templates/Component.module.css.hbs',
        },
      ];

      return actions;
    },
  });
  plop.setGenerator('ApiHook', {
    description: 'Cria um novo GET Hook para requisições HTTP',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do ApiHook:',
      },
      {
        type: 'list',
        name: 'method',
        message: 'Método HTTP:',
        choices: ['GET', 'POST', 'PUT', 'DELETE'],
      },
      {
        type: 'confirm',
        name: 'hasParams',
        message: 'Esse hook terá parâmetros?',
        default: false,
      },
      {
        type: 'input',
        name: 'params',
        message: 'Especifique os parâmetros (ex: page, limit, filter):',
        when: (answers) => answers.hasParams,
      },
      {
        type: 'input',
        name: 'types',
        message:
          'Especifique os tipos para os parâmetros (ex: number, number, string):',
        when: (answers) => answers.hasParams,
      },
      {
        type: 'input',
        name: 'endpoint',
        message: 'Informe o endpoint da API:',
      },
      {
        type: 'input',
        name: 'route',
        message: 'Informe onde na api o get será armazenado:',
      },
    ],
    actions: function (data) {
      const paramList = data.hasParams
        ? data.params.split(',').map((param) => param.trim())
        : [];
      const typeList = data.hasParams
        ? data.types.split(',').map((type) => type.trim())
        : [];
      const paramInterfaceName = `I${plop.getHelper('pascalCase')(
        data.name,
      )}Params`;

      return [
        {
          type: 'add',
          path: `src/app/api/{{kebabCase route}}/{{kebabCase name}}.ts`,
          templateFile: 'plop-templates/ApiHook.ts.hbs',
          data: {
            paramInterfaceName,
            paramList,
            typeList,
          },
        },
      ];
    },
  });
  plop.setGenerator('Provider', {
    description: 'Cria um novo Provider',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do Provider:',
      },
      {
        type: 'confirm',
        name: 'hasParams',
        message: 'Esse Provider terá parâmetros?',
        default: false,
      },
      {
        type: 'input',
        name: 'params',
        message: 'Especifique os parâmetros (ex: page, limit, filter):',
        when: (answers) => answers.hasParams,
      },
      {
        type: 'input',
        name: 'types',
        message:
          'Especifique os tipos para os parâmetros (ex: number, number, string):',
        when: (answers) => answers.hasParams,
      },
    ],
    actions: function (data) {
      const paramList = data.hasParams
        ? data.params.split(',').map((param) => param.trim())
        : [];
      const typeList = data.hasParams
        ? data.types.split(',').map((type) => type.trim())
        : [];
      const paramInterfaceName = `I${plop.getHelper('pascalCase')(
        data.name,
      )}Params`;

      return [
        {
          type: 'add',
          path: `src/providers/{{camelCase name}}.tsx`,
          templateFile: 'plop-templates/Provider.tsx.hbs',
          data: {
            paramInterfaceName,
            paramList,
            typeList,
          },
        },
      ];
    },
  });
};
