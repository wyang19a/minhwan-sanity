// import {  as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'painting',
  // visible title
  title: 'Painting',
  type: 'document',
  icon: () => '🖌️',
  fields: [
    {
      name: 'name',
      title: '이름',
      type: 'string',
      description: '이름을 적어주세요.',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: '_id',
        maxLength: '100',
      },
      description: '"Generate" 버튼 클릭!'
    },
    {
      name: 'image',
      title: '대표 이미지',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Caption',
      type: 'string',
      description: '추가할 내용을 적어주세요.',
    },
    {
      name: 'images',
      title: '추가 이미지',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ]
};
