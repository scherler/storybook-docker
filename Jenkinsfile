dockerbookImage=""
node {
    deleteDir()
    sh 'mkdir dockerbook'
    dir('dockerbook') {
        stage('Build storybook') {
            checkout scm
            docker.build('storybook-docker')
        }
    }
    stage('Run and and smoke test') {
        // Build Docker image
        echo 'Test whether you can start it'
        docker.image('storybook-docker').withRun() {
            def ret = sh './smoke.sh'
        }
    }
    stage('end') {
        println ret
    }
}
