'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';

const PostDetailPage = ({ params }) => {
    const router = useRouter();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    // params = Promise ({ id: '1' })
    // use() 훅을 사용하여 unWrap 하기
    // resolvedParams = { id: '1' }
    const resolvedParams = use(params);

    useEffect(() => {
        //게시글 불러오기
        axios
            .get('/api/posts/1')
            .then((res) => {
                setPost(res.data);
                setLoading(false);
            })
            .catch(() => {
                console.error(error);
                setLoading(false);
            });
    }, [resolvedParams.id, router]);

    //로딩 중
    if (loading) {
        return <div>로딩 중....</div>;
    }

    return (
        <div className='container mx-auto'>
            <div className='text-3xl font-black'> {post.title}</div>
            <div className='text-xl'> {post.content}</div>
            <span className='text-gray-400'> {post.createdAt}</span>
            <div className='flex'>
                <Link href={'/posts'}>목록</Link>
                <button className='ml-auto'>수정</button>
                <button>삭제</button>
            </div>
        </div>
    );
};

export default PostDetailPage;
