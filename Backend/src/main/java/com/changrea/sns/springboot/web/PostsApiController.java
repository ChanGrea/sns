package com.changrea.sns.springboot.web;

import com.changrea.sns.springboot.service.posts.PostsService;
import com.changrea.sns.springboot.web.dto.PostsResponseDto;
import com.changrea.sns.springboot.web.dto.PostsSaveRequestDto;
import com.changrea.sns.springboot.web.dto.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class PostsApiController {

    private final PostsService postsService;

    //MODIFEID: 교재(@PutMapping) -> @PostMapping
    @PostMapping("/api/v1/posts")
    public Long save(@RequestBody PostsSaveRequestDto requestDto) {
        return postsService.save(requestDto);
    }

    @PutMapping("/api/v1/posts/{id}")
    public Long update(@PathVariable Long id, @RequestBody PostsUpdateRequestDto requestDto) {
        return postsService.update(id, requestDto);
    }

    //MODIFIED: 교제에 없는 부분 -> 새로 생성
    @GetMapping("/api/v1/posts/{id}")
    public PostsResponseDto findBydId (@PathVariable Long id) {
        return postsService.findById(id);
    }
}
