export const dataset = [
  {
    category: { slug: 'social-media-ai', name: 'Social Media' },
    contents: [
      {
        id: 'sm-1',
        title: 'AI Motivational Reel Banao Free Mein',
        mediaType: 'YOUTUBE',
        mediaUri: 'https://www.youtube.com/embed/HL7L6ZbUc',
        thumbnailUrl: 'https://i.ytimg.com/vi/HL7L6ZbUc/hqdefault.jpg',
        duration: '12:41',
      },
      {
        id: 'sm-2',
        title: 'Instagram Ka Naya AI Feature',
        mediaType: 'YOUTUBE',
        mediaUri: 'https://www.youtube.com/embed/meVTqNn1P5A',
        thumbnailUrl: 'https://i.ytimg.com/vi/meVTqNn1P5A/hqdefault.jpg',
        duration: '08:22',
      },
      {
        id: 'sm-3',
        title: 'AI Tools Se Asani Se Content Creator Bano',
        mediaType: 'YOUTUBE',
        mediaUri: 'https://www.youtube.com/embed/ogAG6GcmHJQ',
        thumbnailUrl: 'https://i.ytimg.com/vi/ogAG6GcmHJQ/hqdefault.jpg',
        duration: '10:12',
      },
    ],
  },
  {
    category: { slug: 'ai-income', name: 'AI Income' },
    contents: [
      {
        id: 'income-1',
        title: 'Yeh Free AI Tool Se Paise Kamao',
        mediaType: 'YOUTUBE',
        mediaUri: 'https://www.youtube.com/embed/TpW3QxwADgE',
        thumbnailUrl: 'https://i.ytimg.com/vi/TpW3QxwADgE/hqdefault.jpg',
        duration: '14:09',
      },
      {
        id: 'income-2',
        title: 'Quick Money AI Se',
        mediaType: 'YOUTUBE',
        mediaUri: 'https://www.youtube.com/embed/39GvazYUtc',
        thumbnailUrl: 'https://i.ytimg.com/vi/39GvazYUtc/hqdefault.jpg',
        duration: '09:56',
      },
      {
        id: 'income-3',
        title: 'Fiverr Par AI Se Paise Kamao',
        mediaType: 'YOUTUBE',
        mediaUri: 'https://www.youtube.com/embed/PTtAAW3LSP4',
        thumbnailUrl: 'https://i.ytimg.com/vi/PTtAAW3LSP4/hqdefault.jpg',
        duration: '11:05',
      },
    ],
  },
  {
    category: { slug: 'ai-essentials', name: 'AI Essentials' },
    contents: [
      {
        id: 'essentials-1',
        title: '50 Lakh Ki AI Course Bilkul Free',
        mediaType: 'YOUTUBE',
        mediaUri: 'https://www.youtube.com/embed/DzCWyUCr9LQ',
        thumbnailUrl: 'https://i.ytimg.com/vi/DzCWyUCr9LQ/hqdefault.jpg',
        duration: '18:40',
      },
      {
        id: 'essentials-2',
        title: 'Nvidia Ka Free Generative AI Course',
        mediaType: 'YOUTUBE',
        mediaUri: 'https://www.youtube.com/embed/kmHt5BHXYvU',
        thumbnailUrl: 'https://i.ytimg.com/vi/kmHt5BHXYvU/hqdefault.jpg',
        duration: '07:52',
      },
      {
        id: 'essentials-3',
        title: '5 Best Free AI Skills Course',
        mediaType: 'YOUTUBE',
        mediaUri: 'https://www.youtube.com/embed/u-aNkDcLneo',
        thumbnailUrl: 'https://i.ytimg.com/vi/u-aNkDcLneo/hqdefault.jpg',
        duration: '16:28',
      },
    ],
  },
]

export const flatVideos = dataset.flatMap((group) =>
  group.contents.map((video) => ({
    ...video,
    category: group.category,
  })),
)

export const findVideoById = (id) => flatVideos.find((video) => video.id === id)
