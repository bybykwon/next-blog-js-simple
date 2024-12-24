'use client';

import React, { useState } from 'react';
import axios from 'axios'; // axios를 import해야 합니다
import { CircleX } from 'lucide';

const WritePage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
        try {
            const res = await axios.post('/api/posts', { title, content }); // axios 요청

            if (res.status === 201) {
                // 성공 상태 확인
                alert('글쓰기 완료');
                setTitle(''); // 폼 초기화
                setContent('');
            } else {
                alert('글쓰기 실패');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('글쓰기 실패');
        }
    };

    return (
        <div className='container mx-auto py-10'>
            <h2 className='text-4xl font-black mb-7'>포스트 글쓰기</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <label
                        htmlFor='tit'
                        className='text-2xl font-black mb-2 block'
                    >
                        제목
                    </label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        name='tit'
                        id='tit'
                        placeholder='제목을 입력하세요'
                        className='w-full p-2 border border-gray-300 rounded'
                        required
                    />
                </div>
                <button
                    className='absolute top-10 right-10 h-10 w-10 z-50 bg-green-500  text-white text-3xl'
                    onClick={() => (window.location.href = '/posts')}
                >
                    x
                </button>
                <div className='mb-5'>
                    <label
                        htmlFor='content'
                        className='text-2xl font-black mb-2 block'
                    >
                        내용
                    </label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        name='content'
                        id='content'
                        placeholder='당신의 이야기를 적어보세요'
                        className='w-full p-2 border border-gray-300 rounded h-40'
                        required
                    ></textarea>
                </div>
                <button
                    type='submit'
                    className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
                >
                    작성하기
                </button>
            </form>
        </div>
    );
};

export default WritePage;
