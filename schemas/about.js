import { MdPerson as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'about',
  // visible title
  title: 'About',
  type: 'document',
  icon,
  fields: [
    {
      name: 'headline',
      title: '페이지 헤더',
      type: 'string',
      description: 'About페이지 상단에 표시할 문구',
    },
    {
      name: 'image',
      title: '프로필 이미지',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
};
