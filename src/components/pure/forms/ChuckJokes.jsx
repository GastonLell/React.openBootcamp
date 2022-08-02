import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomJoke } from '../../../services/chuckService';
const ChuckJokes = () => {
    const [joke, setJoke] = useState(null);
    const [like, setLike] = useState({
        like: [],
        dontLike: []
    })

    useEffect(() => {
        getJoke();
    }, [])

    const likeJoke = (id) => {
        if (!like.like.includes(id)) {
            setLike({
                ...like,
                like: [...like.like, id]
            })
        }
    }

    const dontlikeJoke = (id) => {
        if (!like.like.includes(id)) {
            setLike({
                ...like,
                dontLike: [...like.dontLike, id]
            })
        }
    }
    const getJoke = () => {
        getRandomJoke().then(resp => {
            setJoke(resp.data)
            console.log(joke)

        }).catch(err => console.log(err))
    }

    return (
        <div className="container">
            <h2 className='text-center mb-4 mt-4 '>Chuck Norris Jokes</h2>
            <div className='pt-2 d-flex justify-content-end'>
                <div className='d-flex justify-content-center w-25'>
                    <div className='p-3'>
                        <i className="bi bi-emoji-smile"></i>
                        <p>{like.like.length}</p>
                    </div>
                    <div className='p-3'>
                        <i class="bi bi-emoji-frown-fill"></i>
                        <p>{like.dontLike.length}</p>
                    </div>
                </div>

            </div>
            {
                joke != null
                && (
                    <div className="card text-center">
                        <div className="card-body">
                            <h2 className="card-text">{joke?.value}</h2>
                        </div>
                        <div className="card-footer">
                            <button disabled={like.like.includes(joke.id) || like.dontLike.includes(joke.id)} className='btn btn-primary' onClick={() => likeJoke(joke.id)}>Like</button>
                            <button disabled={like.like.includes(joke.id) || like.dontLike.includes(joke.id)} className='btn btn-danger' onClick={() => dontlikeJoke(joke.id)}>Dont Like</button>
                        </div>
                    </div>
                )
            }
            <div className='d-flex justify-content-center flex-column pt-2'>
                <button className='btn btn-primary w-50 m-auto' onClick={getJoke}>New Joke</button>
            </div>
        </div >
    )
}

export default ChuckJokes