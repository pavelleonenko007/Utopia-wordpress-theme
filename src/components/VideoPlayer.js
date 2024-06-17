class VideoPlayer {
	constructor(el) {
		/**
		 * @type {HTMLDivElement}
		 */
		this.videoPlayer = el;

		if (!el) {
			return;
		}

		/**
		 * video element of the video player
		 * @type {HTMLVideoElement}
		 */
		this.video = this.videoPlayer.querySelector('video');

		if (!this.video) {
			return;
		}

		this.playButton = this.videoPlayer.querySelector(
			'.video-player__button--play'
		);
		this.pauseButton = this.videoPlayer.querySelector(
			'.video-player__button--pause'
		);
		this.muteButton = this.videoPlayer.querySelector(
			'.video-player__button--volume'
		);
		this.fullscreenButton = this.videoPlayer.querySelector(
			'.video-player__button--fullscreen'
		);
		this.timeline = this.videoPlayer.querySelector('.video-player__timeline');
		this.progressNode = this.videoPlayer.querySelector(
			'.video-player__progress'
		);
		this.progressGhostNode = this.videoPlayer.querySelector(
			'.video-player__ghost'
		);

		this.bindEvents();
	}

	bindEvents() {
		this.playButton.onclick = this.play.bind(this);
		this.pauseButton.onclick = this.pause.bind(this);
		this.muteButton.onclick = this.toggleMute.bind(this);
		this.fullscreenButton.onclick = this.toggleFullscreen.bind(this);
		document.onfullscreenchange = this.handleFullScreen.bind(this);
		this.video.ontimeupdate = this.handleTimeUpdate.bind(this);
		this.video.onclick = this.togglePlay.bind(this);
		this.videoPlayer.ondblclick = this.toggleFullscreen.bind(this);
		this.timeline.onclick = this.handleTimelineClick.bind(this);
		this.timeline.onmousemove = this.handleTimelineMouseMove.bind(this);
	}

	play() {
		if (this.video.paused) {
			this.video.play().then(() => {
				this.videoPlayer.classList.add('video-player--is-playing');
			});
		}

		return this;
	}

	pause() {
		if (!this.video.paused) {
			this.video.pause();
			this.videoPlayer.classList.remove('video-player--is-playing');
		}

		return this;
	}

	togglePlay() {
		this.video.paused ? this.play() : this.pause();
	}

	toggleMute() {
		if (!this.video.muted) {
			this.video.muted = true;
			this.videoPlayer.classList.add('video-player--is-muted');
		} else {
			this.video.muted = false;
			this.videoPlayer.classList.remove('video-player--is-muted');
		}

		return this;
	}

	setTime(seconds) {
		this.video.currentTime = seconds;
		return this;
	}

	toggleFullscreen() {
		if (!document.fullscreenElement) {
			this.videoPlayer.requestFullscreen().catch((err) => {
				alert(
					`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
				);
			});
		} else {
			document.exitFullscreen();
		}

		return this;
	}

	handleFullScreen() {
		this.videoPlayer.classList.toggle(
			'video-player--is-fullscreen',
			document.fullscreenElement === this.videoPlayer
		);
	}

	handleTimeUpdate() {
		const percent = (this.video.currentTime / this.video.duration) * 100;
		this.progressNode.style.width = percent + '%';
	}

	handleTimelineClick(event) {
		const rect = this.timeline.getBoundingClientRect();
		const width = rect.width;
		const percent = event.offsetX / width;

		this.video.currentTime = percent * this.video.duration;
	}

	handleTimelineMouseMove(event) {
		const rect = this.timeline.getBoundingClientRect();
		const width = rect.width;
		const percent = event.offsetX / width;

		this.progressGhostNode.style.width = percent * 100 + '%';
	}
}

export const initVideoPlayers = () => {
	const videoPlayers = document.querySelectorAll('.video-player');
	videoPlayers.forEach((videoPlayer) => {
		new VideoPlayer(videoPlayer);
	});
};
