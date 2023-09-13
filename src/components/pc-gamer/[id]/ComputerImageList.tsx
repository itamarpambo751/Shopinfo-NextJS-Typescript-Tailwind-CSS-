import React from 'react';

interface UrlObjects {
	url: string
	current?: Boolean
}

interface ComputerImageListProps {
	urlList: UrlObjects[]
	dispatch: React.Dispatch<React.SetStateAction<UrlObjects>>
}

const ComputerImageList: React.FC<ComputerImageListProps> = ({
	urlList, dispatch
}: ComputerImageListProps) => {

	const handleClick = (url: UrlObjects) => {
		dispatch(() => {
			urlList.forEach(obj => {
				if (obj.url === url.url) obj.current = true
				else obj.current = false
			})
			return url
		})
	}

	return (
		<ul className='space-y-2'>
			{urlList.map((url, i) => {
				return (
					<li
						data-current={url.current}
						className='cursor-pointer pb-4 w-[80px] h-[100px]
						data-[current=true]:border-b-2 border-[var(--red-color)]'
						key={i}
						onClick={() => handleClick(url)}
					>
						<img src={url.url} className='object-cover'/>
					</li>
				)
			})}
		</ul>
	)
}

export default ComputerImageList;