import { Button } from '@nextui-org/react'
import { LuX } from 'react-icons/lu'

interface SliderProps extends React.PropsWithChildren {
  title: string
  show: boolean
  setShow: (value: boolean | ((prev: boolean) => boolean)) => void
  footer?: React.ReactNode
}

export default function Slider ({
  title,
  show,
  setShow,
  footer,
  children
}: SliderProps): JSX.Element {
  const handleOnPressClose = (): void => {
    setShow(false)
  }
  return (
    <div
      className={`fixed inset-0 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 flex justify-end z-50 h-dvh w-dvh transition-all ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      <div className={`w-96 bg-content1 flex flex-col justify-between transition-all ${show ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='overflow-y-auto'>
          <div className='flex justify-between gap-2 p-4 border-b border-content3'>
            <h3 className='pt-1'>{title}</h3>
            <Button isIconOnly size='sm' onPress={handleOnPressClose}>
              <LuX className='w-5 h-5' />
            </Button>
          </div>

          <div className='p-4'>
            {children}
          </div>
        </div>

        {
          footer !== undefined && (
            <div className='border-t border-content3 p-4'>
              {footer}
            </div>
          )
        }
      </div>
    </div>
  )
}
