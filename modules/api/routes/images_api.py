import base64
import io
from typing import Optional

from fastapi.responses import FileResponse, StreamingResponse
from PIL import Image
from pydantic import BaseModel

from modules import images, runners
from modules.api.models.base import BaseResponseModel

from ..api_router import api


class GenerateImageRequest(BaseModel):
    prompt: str
    negative_prompt: str = ""
    batch_size: int = 1
    batch_count: int = 1
    scheduler_id: str = "euler_a"
    steps: int = 28
    scale: int = 7.5
    image_height: int = 512
    image_width: int = 512
    seed: Optional[int] = None
    strength: Optional[float] = None
    img: Optional[str] = None


class GenerateImageResponseData(BaseModel):
    images: dict
    performance: float


class GenerateImageResponseModel(BaseResponseModel):
    data: GenerateImageResponseData


@api.post("/images/generate", response_model=GenerateImageResponseModel)
def generate_image(req: GenerateImageRequest):
    if req.img is not None:
        req.img = Image.open(io.BytesIO(base64.b64decode(req.img)))
    images, performance = runners.generate(
        prompt=req.prompt,
        negative_prompt=req.negative_prompt,
        batch_size=req.batch_size,
        batch_count=req.batch_count,
        scheduler_id=req.scheduler_id,
        steps=req.steps,
        scale=req.scale,
        seed=None if req.seed == -1 else req.seed,
        image_height=req.image_height,
        image_width=req.image_width,
        strength=req.strength,
        img=req.img,
    )
    return GenerateImageResponseModel(
        status="success",
        data=GenerateImageResponseData(images=images, performance=performance),
    )


@api.post("/images/generator", response_model=GenerateImageResponseModel)
def generator_image(req: GenerateImageRequest):
    if req.img is not None:
        req.img = Image.open(io.BytesIO(base64.b64decode(req.img)))
    return StreamingResponse(
        runners.generator(
            prompt=req.prompt,
            negative_prompt=req.negative_prompt,
            batch_size=req.batch_size,
            batch_count=req.batch_count,
            scheduler_id=req.scheduler_id,
            steps=req.steps,
            scale=req.scale,
            seed=None if req.seed == -1 else req.seed,
            image_height=req.image_height,
            image_width=req.image_width,
            strength=req.strength,
            img=req.img,
        )
    )


@api.get("/images/{category}/{filename}")
def get_image(category: str, filename: str):
    return FileResponse(images.get_image_filepath(category,filename))
