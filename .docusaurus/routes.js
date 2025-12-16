import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/physical-ai-humanoid-robotics-future/docs',
    component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs', 'e9e'),
    routes: [
      {
        path: '/physical-ai-humanoid-robotics-future/docs',
        component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs', 'bed'),
        routes: [
          {
            path: '/physical-ai-humanoid-robotics-future/docs',
            component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs', '7bb'),
            routes: [
              {
                path: '/physical-ai-humanoid-robotics-future/docs/chapters/chapter1',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/chapters/chapter1', '74a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/chapters/chapter2',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/chapters/chapter2', 'e65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/chapters/template',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/chapters/template', 'fd2'),
                exact: true
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/quizzes/chapter1-section1',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/quizzes/chapter1-section1', '23a'),
                exact: true
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/quizzes/chapter1-section2',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/quizzes/chapter1-section2', '5fb'),
                exact: true
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/quizzes/chapter1-section3',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/quizzes/chapter1-section3', 'cd7'),
                exact: true
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/quizzes/chapter1-section4',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/quizzes/chapter1-section4', 'ef7'),
                exact: true
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/quizzes/chapter1-section5',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/quizzes/chapter1-section5', '82e'),
                exact: true
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/quizzes/chapter1-sections',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/quizzes/chapter1-sections', '4ed'),
                exact: true
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/quizzes/chapter2-section1',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/quizzes/chapter2-section1', '526'),
                exact: true
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/quizzes/chapter2-section2',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/quizzes/chapter2-section2', 'e56'),
                exact: true
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/quizzes/chapter2-section3',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/quizzes/chapter2-section3', 'e67'),
                exact: true
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/quizzes/chapter2-section4',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/quizzes/chapter2-section4', '5bc'),
                exact: true
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/quizzes/chapter2-section5',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/quizzes/chapter2-section5', '0f6'),
                exact: true
              },
              {
                path: '/physical-ai-humanoid-robotics-future/docs/quizzes/chapter2-sections',
                component: ComponentCreator('/physical-ai-humanoid-robotics-future/docs/quizzes/chapter2-sections', 'cbd'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
