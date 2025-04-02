import { useState } from 'react';

function Nav(props) {
    const [list, setList] = useState(props.list);

    const [isUpdate, setIsUpdate] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(-1);
    const [updateContent, setUpdateContent] = useState('');


    const append = () => {
        const data = parseInt(Math.random() * 10) + 1;
        const updateList = [...list];
        updateList.push(data);
        setList(updateList);
    }

    const remove = (index) => {
        const updateList = [...list];
        updateList.splice(index, 1);
        setList(updateList);
    }

    const showUpdate = (index) => {
        setIsUpdate(true);
        setUpdateIndex(index);
        setUpdateContent(list[index]);
    }
    const update = () => {
        const value = document.querySelector('#content').value;
        const updateList = [...list];
        updateList[updateIndex] = value;
        setList(updateList);
        setIsUpdate(false);
    }
    const onChange = (e) => {
        const content = e.target.value;
        setUpdateContent(content);
    }

    return (
        <nav>
            <button onClick={append}>추가</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <a href={`${index + 1}.html`}>{item}</a>
                        <button onClick={() => showUpdate(index)}>수정</button>
                        <button onClick={() => remove(index)}>삭제</button>
                    </li>
                ))}
            </ul>

            {isUpdate ? (
                <div>
                    수정모드: {updateIndex}번
                    <input type="text" id="content" value={updateContent} onChange={onChange} />
                    <button onClick={update}>완료</button>
                </div>
            ) : null}
        </nav>
    );
}

export default Nav;