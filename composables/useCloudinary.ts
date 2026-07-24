import { useRuntimeConfig } from '#imports'

export const useCloudinary = () => {
  const config = useRuntimeConfig()
  const cloudName = (config.public?.cloudinaryCloudName as string) || 'hoopoe'
  const defaultFolder = (config.public?.cloudinaryFolder as string) || 'vulture'

  /**
   * Cloudinary vulture 폴더 내 이미지 Full URL 생성
   * @param publicId 이미지파일명 또는 sub-path (예: 'hero-banner.webp' 또는 'blogs/photo1.png')
   * @param transformations 추가적인 Cloudinary 변환 옵션 (예: 'w_800,f_auto,q_auto')
   */
  const getImageUrl = (publicId: string, transformations: string = 'f_auto,q_auto') => {
    if (!publicId) return ''
    // 이미 full URL인 경우 그대로 반환
    if (publicId.startsWith('http://') || publicId.startsWith('https://')) {
      return publicId
    }

    // vulture/ 폴더 prefix 처리
    const cleanPublicId = publicId.startsWith(`${defaultFolder}/`) 
      ? publicId 
      : `${defaultFolder}/${publicId.replace(/^\//, '')}`

    const transformPath = transformations ? `${transformations}/` : ''
    return `https://res.cloudinary.com/${cloudName}/image/upload/${transformPath}${cleanPublicId}`
  }

  return {
    cloudName,
    defaultFolder,
    getImageUrl
  }
}
