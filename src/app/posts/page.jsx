'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // axios를 import해야 합니다
import Link from 'next/link';

const PostsPage = () => {
    const [posts, setPosts] = useState([]); // 상태 변수 초기화
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // API 호출
        axios
            .get('/api/posts') // '/api/posts'에 데이터를 요청
            .then((res) => {
                setPosts(res.data); // 응답 데이터를 상태에 저장
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false); // 에러 처리
            });
    }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시 한 번만 실행

    //로딩 중
    if (loading) {
        return <div>로딩 중....</div>;
    }

    return (
        <div className='container mx-auto py-10'>
            <h2 className='text-4xl font-black mb-7'>블로그 목록</h2>
            <Link
                href={'/posts/write'}
                className='p-4 bg-green-400 text-white text-center absolute flex items-center top-5 right-10 h-16 w-20 z-50'
            >
                글쓰기
            </Link>
            <div className='divide-y divide-gray-300'></div>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div
                        key={post.id}
                        className='block'
                    >
                        <h3 className='text-2xl font-semibold mt-5 mb-5'>{post.title}</h3>
                        <p>{post.content}</p>
                        <span>{post.createdAt}</span>
                    </div>
                ))
            ) : (
                <p>게시물이 없습니다.</p>
            )}
        </div>
    );
};

export default PostsPage;
