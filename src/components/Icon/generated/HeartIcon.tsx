import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgHeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.895 5.003a3.95 3.95 0 0 0-1.616.337c-.461.208-.82.44-1.07.689-1.54 1.539-1.601 3.925-.148 5.67 1.855 2.23 5.017 5.183 6.943 6.925 1.926-1.743 5.09-4.697 6.942-6.924 1.453-1.746 1.39-4.131-.148-5.67-.25-.25-.61-.482-1.07-.69-1.571-.711-3.868-.34-4.84 1.499 0 0-.505.95-.67 1.257-.098.186-.334.186-.434 0-.21-.39-.664-1.257-.664-1.257-.67-1.266-1.97-1.836-3.225-1.836Zm4.108 15.796c-.358 0-.715-.128-1-.384-1.914-1.721-5.432-4.974-7.48-7.435-2.13-2.56-2.015-6.078.272-8.365.42-.421.979-.79 1.66-1.097 2.263-1.024 4.925-.476 6.549 1.179 1.624-1.654 4.286-2.201 6.549-1.18.68.308 1.238.677 1.659 1.098 2.287 2.287 2.4 5.805.27 8.365-2.044 2.458-5.562 5.713-7.478 7.435a1.494 1.494 0 0 1-1.001.384Z"
      />
    </svg>
  )
}

export default createIcon(SvgHeartIcon)
