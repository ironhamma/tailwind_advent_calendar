import Head from 'next/head'
import {useEffect, useState} from 'react'

export default function Home() {
  
  const dates = [];
  for (let i = 1; i <= 31; i++) {
    dates.push(i);
  }

  const [activeItem, setActiveItem] = useState(null);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    setActiveNote(true);
    const x = setTimeout(() => {
      setActiveNote(false);
    }, 2000);
  }, activeItem)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Tailwind advent calendar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {activeItem && (
      <div className="modal" onClick={() => setActiveItem(null)}>
        <div className="content" onClick={(e) => {e.stopPropagation();}}>
          <h2 className="text-2xl mb-8">
            Day - {activeItem < 10 ? `0${activeItem}` : activeItem}.
          </h2>
          <div className="flex-1">Here could be some daily content</div>
          { activeNote && (
            <div className="bg-yellow-200 w-full rounded px-2 py-1 self-end justify-self-end">
            Click outside to close
          </div>)
          }
        </div>
      </div>
    )}

      <main className="w-full h-screen bg-gray-100 my-0 mx-auto">
        <div className="container w-full h-full mx-auto px-4 py-8 flex flex-col items-center justify-start ">
          <h1 className="text-2xl text-black mb-8">Tailwind calendar</h1>
          <div className="flex flex-wrap items-start justify-center bg-gray-200 w-full mx-4 my-4 px-4 py-4 h-full rounded">
            {dates.map(e => 
              <div className="calitem" onClick={() => setActiveItem(e)}>
                Dec {e < 10 ? `0${e}` : e}.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
