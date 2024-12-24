import { NextResponse } from 'next/server';
import axios from 'axios';
import posts from '@/data/posts';

// 전체 게시글 조회 - GET 요청 처리
// 게시글 목록 페이지로 이동하면 실행됨
export async function GET() {
    try {
        // 만약 api 서버로 요청을 보내서 게시글 목록을 가져오고 싶다면
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // const posts = response.data;

        // 로컬 데이터를 바로 반환합니다
        return NextResponse.json(posts);
    } catch (error) {
        // 에러가 발생하면 에러 메시지와 함께 500 상태 코드 반환
        return NextResponse.json({ error: '게시글을 불러오는데 실패했습니다.' }, { status: 500 });
    }
}
