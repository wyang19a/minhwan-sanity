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
      validation: Rule => [Rule.required(),
        Rule.max(40).error(`제한 글자 수 초과`)]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: '오른편에 "Generate" 버튼 클릭!',
      options: {
        source: '_id',
        maxLength: '100',
        slugify: input => {
          if(input.includes('drafts.') || input.includes('drafts-')) {
            return input.substring(7)
          }
          else {
            return input
          }
        }
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: '썸네일 이미지',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Caption',
      type: 'text',
      rows: 3,
      description: '게시글 내부에 표시할 제목.',
      validation: Rule => Rule.max(280).error(`제한 글자 수 초과`)
    },
    {
      name: 'images',
      title: '추가 이미지',
      type: 'array',
      description: '추가 이미지',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
  ]
};
