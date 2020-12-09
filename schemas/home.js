import { MdHome as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'home',
  // visible title
  title: 'Home',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: '썸네일 제목',
      type: 'string',
      description: '썸네일에 표시할 제목.',
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
      title: '썸네일 이미지',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Caption',
      type: 'string',
      description: '게시글 내부에 표시할 제목.',
    },
    {
      name: 'images',
      title: '추가 이미지',
      type: 'array',
      description: '추가 이미지',
      of: [{ type: 'image' }],
    },
  ]
};
