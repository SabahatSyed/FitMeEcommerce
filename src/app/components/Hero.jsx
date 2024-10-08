import Image from 'next/image'
import NextLink from 'next/link'

const Hero = () => {
	return (
		<div className='relative overflow-hidden bg-slate-900 full-bleed'>
			<div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
					<div className='sm:max-w-lg'>
						<h1 className='text-4xl font font-extrabold tracking-tight text-gray-100 sm:text-6xl'>
							Make your fashion more perfect
						</h1>
						<p className='mt-4 text-xl text-gray-500'>
							With our clothing collection, you can take your style to the next
							level.
						</p>
					</div>
					<div>
						<div className='mt-10'>
							{/* Decorative image grid */}
							<div
								aria-hidden='true'
								className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'>
								<div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
									<div className='flex items-center space-x-6 lg:space-x-8'>
										<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
											<div className='rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
												<Image
													width={176}
													height={256}
													src='https://i.postimg.cc/F1tpBjds/tile-01.jpg'
													alt=''
													className='w-full h-full object-center object-cover'
												/>
											</div>
											<div className='rounded-lg overflow-hidden'>
												<Image
													width={176}
													height={256}
													src='https://i.postimg.cc/CLLbwrYT/tile-02.jpg'
													alt=''
													className='w-full h-full object-center object-cover'
												/>
											</div>
										</div>
										<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
											<div className='rounded-lg overflow-hidden'>
												<Image
													width={176}
													height={256}
													src='https://i.postimg.cc/fbX9867X/tile-03.jpg'
													alt=''
													className='w-full h-full object-center object-cover'
												/>
											</div>
											<div className='rounded-lg overflow-hidden'>
												<Image
													width={176}
													height={256}
													src='https://i.postimg.cc/zBrR60pQ/tile-04.jpg'
													alt=''
													className='w-full h-full object-center object-cover'
												/>
											</div>
											<div className='rounded-lg overflow-hidden'>
												<Image
													width={176}
													height={256}
													src='https://i.postimg.cc/52Dzqxzb/tile-05.jpg'
													alt=''
													className='w-full h-full object-center object-cover'
												/>
											</div>
										</div>
										<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
											<div className='rounded-lg overflow-hidden'>
												<Image
													width={176}
													height={256}
													src='https://i.postimg.cc/cLvYnKrF/tile-06.jpg'
													alt=''
													className='w-full h-full object-center object-cover'
												/>
											</div>
											<div className='rounded-lg overflow-hidden'>
												<Image
													width={176}
													height={256}
													src='https://i.postimg.cc/G3jkwwWx/tile-07.jpg'
													alt=''
													className='w-full h-full object-center object-cover'
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<NextLink href='/products' passHref>
								<span className='inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700 cursor-pointer'>
									Shop Now
								</span>
							</NextLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero

// feel luxutious with premium quality outfits
